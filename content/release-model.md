---
title: "Release model"
description: "How Lithespan defines, qualifies, publishes, and maintains hardware- and OS-optimized software releases."
date: 2026-08-07
lastmod: 2026-08-07
cta_label: "DEFINE A RELEASE"
cta_title: "Start with the target."
cta_body: "Tell us the component, platform, CPU, workload objective, output, and required support period."
cta_button: "Define your target"
cta_subject: "Lithespan release target"
---

A Lithespan release records what was built, where it runs, what it was optimized for, how it was tested, and how long it will be maintained.

## Release coordinates

- **Component:** upstream version, patches, dependencies, toolchain, and build options
- **Platform:** operating system, distribution, libc, system ABI, and required services
- **CPU:** architecture, minimum ISA, optimized ISA, and fleet assumptions
- **Workload:** throughput, latency, memory, startup, edge, compatibility, or another measured objective
- **Output:** OCI image, native package, Nix object, archive, or another qualified format

Public CPU targets can cover x86-64 baseline through x86-64-v4, Armv8-A, and selected Armv9-A profiles. Builds for Graviton, Ampere, Zen, or specific Intel processor families usually begin as private work.

## One release identity

Packages, images, Nix outputs, and archives trace to one canonical payload and evidence set. Promotion from candidate to stable does not rebuild that payload; each distribution system receives a reference to the qualified release.

## Channels

- **Edge:** experimental builds without a stability commitment
- **Candidate:** the intended stable payload while qualification is in progress
- **Stable:** a maintained public target with evidence and an end-of-support date
- **Customer or LTS:** a private scope with defined platforms, outputs, regression frequency, response obligations, and support term

## Performance evidence

Claims state the workload, hardware or cloud instance, OS and kernel, duration, warm-up policy, concurrency, dataset, sample count, variance, and comparison baseline. Reports include regressions and trade-offs, not only favorable results.

## Upstream policy

Downstream changes stay narrow and reviewable. General improvements move upstream where practical. Lithespan maintains the qualified composition and its evidence without creating unnecessary dependence on a permanent fork.

The [security record](/security/), [maintenance terms](/maintenance/), and [delivery formats](/formats/) remain attached to this identity.
