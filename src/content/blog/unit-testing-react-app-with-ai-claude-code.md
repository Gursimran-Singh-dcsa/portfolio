---
title: Unit Testing a React App with AI: 0 to 1,676 Tests
date: 2026-11-10
summary: How I used Claude Code to take a customer's React app from zero unit tests to 1,676, with Vitest, MSW and React Testing Library, and 92% statement coverage.
tags: AI, unit testing, React, Vitest, Claude Code
cover: /blog/covers/unit-testing-react-app-with-ai-claude-code.png
coverAlt: Cover image for the post Unit Testing a React App with AI, from zero tests to 1,676
---

One of my company's customers had a multi-step React 19 application with **no unit tests at all**. I used Claude Code to take it from zero to **1,676 tests across 98 test files**, with every coverage metric above 80% and **no application source code changed** to make a test pass.

This post is how that went: the plan, the setup, the mistake I had to revert, the rules that kept the AI honest, and what I would not trust it with. For confidentiality I can't name the customer or the product, and every example here is generic.

## The starting point

The application was a multi-step web application with several flows: an organic one, a few partner-referred ones, a sub-flow, and standalone links. It had been built and maintained for a while, and every change was verified the old way: by clicking through it.

The ask was simple to say and hard to do:

- Real unit tests with React Testing Library, written at the level of what a user sees and does.
- Every API response mocked, so tests never depend on a real backend.
- Maximum branch and statement coverage.
- A plan first, written down as documents and a specialised agent, not an unplanned prompt marathon.

## How the work went

I split it into five stages.

1. **Plan.** A testing strategy and a test-writing guide, plus a `unit-test-writer` agent that knows this repository.
2. **Setup.** Vitest, MSW, fixtures, render helpers and a network guard.
3. **Screens.** One screen at a time, in flow order, with me choosing the next one.
4. **Coverage.** Push every metric past 80%, then ratchet the thresholds.
5. **Stabilise.** Find and fix flaky tests by running suites under load.

### The course correction

The AI's first pass was not what I wanted. It started testing helper functions in isolation, which is fast and looks productive, and it produces a lot of green tests that say little about whether a screen works.

I reverted it and switched to **screen-by-screen tests**: render a real screen, type and click like a user, and assert on what appears. That is where the real value was, and it is where the bugs were found. If you take one thing from this post, it is to check early whether the AI is testing the right level.

## The test setup

The stack is small and boring on purpose.

| Tool | Job |
| --- | --- |
| Vitest + jsdom | Test runner and a browser-like DOM |
| React Testing Library | Render screens and query them like a user |
| user-event | Real typing, clicking and tabbing |
| MSW | Answers every HTTP request |
| coverage-v8 | Coverage and ratcheting thresholds |

Tests sit next to the code as `*.test.tsx`, and everything shared lives in one `src/test/` folder:

- `setup.ts`: global hooks and store reset between tests.
- `msw/`: the mock server, URL helpers and canned responses.
- `fixtures/`: synthetic offers, identity-check results and cards.
- `utils/`: a `renderWithRouter` helper and a form harness.
- `network-guard.ts`: blocks real network connections.

Scripts are `pnpm test`, `pnpm test:watch` and `pnpm test:coverage`.

## No test can reach a real API

This was the most important rule, because the application talks to real services. I made it hard to break with three layers:

1. **Fake hosts.** Every environment URL is pinned to a `*.test.local` host, so real environment files are never read.
2. **MSW answers everything.** Each test declares the responses it needs: success, a 500, or a network error.
3. **A network guard.** It blocks every real TCP connection and DNS lookup, and any attempt fails the test.

Why a third layer? MSW's "error on unhandled request" option still let a request escape to the network in this setup. So I added the guard, and wrote a test that proves the guard itself works.

## How AI was used

Using AI well here was mostly about structure, not prompting.

- **Docs as the contract.** A strategy document and a test-writing guide set the rules once. The project's `CLAUDE.md` points every session at them, so a new session starts with the same rules.
- **A specialised agent.** `unit-test-writer` knows the helpers, the data rules and the conventions of this repository, so it does not invent its own style each time.
- **Parallel agents.** For the coverage push I split the work across agents by area, each briefed narrowly.
- **Me in the loop.** I picked each screen, set the rules, reviewed the results and reverted what was wrong.

## Keeping the AI honest

Tests written by an AI can be green and worthless. These are the checks I used to make sure they are not.

- **Mutation checks.** Break one line of application code on purpose; the matching test must fail. Then restore it.
- **Never edit the app to pass a test.** No application source was changed, and I checked it with `git diff`.
- **Pin bugs, don't hide them.** When the app behaves wrongly, the test records it as "current behaviour" and the bug is logged as a finding, instead of being quietly worked around.
- **Synthetic data only.** Phone numbers in the 555-01xx range, `@example.com` emails, an SSN area of 000 and published test card numbers. No real customer data went anywhere near a prompt or a test.
- **Stress runs.** Run two or three suites in parallel to flush out flaky, timing-dependent tests.
- **Ratcheted thresholds.** Coverage minimums only go up, so gains cannot quietly slip back.

## The results

| Metric | After the screens | Final |
| --- | --- | --- |
| Statements | 83.4% | 92.5% |
| Branches | 75.9% | 85.4% |
| Functions | 78.4% | 92.3% |
| Lines | 85.6% | 95.5% |

- **98** test files and **1,676** tests.
- **0** real API calls.
- **0** application source changes.
- CI thresholds are locked at 92 / 85 / 92 / 95 for statements, branches, functions and lines, and they only ratchet up.
- Five files are excluded from coverage: two dev-only pages and three unused files.

## Setup gotchas we hit

None of these were AI mistakes. They are the kind of environment problems anyone hits, and each is now written down in the test-writing guide so the next person, or the next agent, does not rediscover it.

| Symptom | Cause | Fix |
| --- | --- | --- |
| Install blocked | pnpm trust policy on two packages | Narrow `trustPolicyExclude` |
| Requests hung | jsdom XHR sent CORS preflights | Force the axios http adapter |
| Unhandled requests ignored | The option was renamed in MSW 3 | Use `onUnhandledFrame` |
| Requests still escaped | MSW "error" mode still passes through | Add a socket-level network guard |
| Test type-check passed instantly | Inherited `exclude` meant 0 files checked | Set `exclude: []` in `tsconfig.test` |
| Random timeouts under load | Cold first import in each test | Warm the modules in `beforeAll` |

The "type-check passed instantly" one is worth a second look. A check that passes because it checked nothing is worse than no check.

## Who did what

**The AI** wrote the setup, helpers and tests, read every branch of each screen, diagnosed silent failures and flakiness, ran the mutation checks and stress runs, and logged every bug it pinned.

**I** set the goal and the hard rules, chose the screen-by-screen approach, reverted work that went the wrong way, reported flaky runs from my own machine, and decided what ships and what to fix.

### Limits to know

- Not every test was mutation-checked, only a sample.
- Tests that pin today's bugs pass while the app is wrong. They will flip when the bug is fixed, which is the point, but it means a green suite does not mean a bug-free app.
- The coverage number measures what the tests execute, not whether the assertions are good. That is why the mutation checks matter.

## Next steps

1. Run `pnpm test:coverage` as a CI gate on every pull request.
2. Use the `unit-test-writer` agent for every new screen.
3. Keep raising the thresholds as coverage grows.

## FAQ

### Can AI write unit tests for an existing React app?

Yes, but only with structure. Written rules, a repository-aware agent, mocked network calls and a human choosing what to test took this app from zero to 1,676 tests. Prompting alone would not have.

### Which tools did you use for React unit testing?

Vitest with jsdom as the runner, React Testing Library and user-event for user-level tests, MSW to mock every API response, and coverage-v8 for coverage with ratcheting thresholds.

### How do you know AI-written tests are actually good?

I broke a line of application code on purpose and confirmed the matching test failed, kept the application source untouched, and pinned wrong behaviour as findings instead of hiding it. I only did this for a sample of tests, not all of them.

### How do you stop tests from calling a real API?

Use three layers: fake hosts, MSW answering every request, and a network guard that fails any real connection.

If you want help adding tests to an existing codebase, or setting up an AI-assisted workflow like this one, [get in touch](https://gursimran.in/#contact) or see [my other work](https://gursimran.in/#work).
