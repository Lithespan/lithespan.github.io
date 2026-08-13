---
title: "How it works"
description: "How Lithespan defines, builds, tests, secures, ships, and maintains software."
date: 2026-08-13
lastmod: 2026-08-13
cta_title: "Define the target."
cta_body: "Tell us the software, hardware, OS, workload, format, and support term."
cta_button: "Define the target"
cta_subject: "Lithespan release target"
---

A Lithespan release links one build to its target, tests, evidence, outputs, and support term.

## Define the release

Six fields define the work:

- **Software:** source, version, dependencies, toolchain, and build options
- **Hardware:** architecture, required features, accelerators, and fleet constraints
- **OS:** distribution, kernel, libc, system ABI, and required services
- **Workload:** performance, memory, startup, compatibility, or another measured goal
- **Format:** container image, machine image, native package, binary, archive, or another tested output
- **Support:** update scope, response terms, and end date

Targets can be portable, architecture-specific, accelerator-aware, or tuned for a particular fleet.

## Move one payload through four stages

1. **Define:** agree the software, target, workload, format, and support term.
2. **Build:** produce a traceable payload from pinned inputs.
3. **Test:** run workload, compatibility, security, upgrade, rollback, and failure tests.
4. **Maintain:** track source changes, rebuild when needed, and repeat the evidence.

A stable release reuses the tested build; promotion changes its status, evidence, and support commitment.

## What stays attached to the release

{{< detail id="performance" title="Performance evidence" summary="Benchmarks include enough context to reproduce the comparison." open="true" >}}
Reports state the workload, hardware, OS, kernel, duration, warm-up, concurrency, dataset, sample count, variance, and baseline. They include regressions and trade-offs. Goals may cover throughput, latency, memory, startup, cost per unit of work, or compatibility.
{{< /detail >}}

{{< detail id="security" title="Security and supply chain" summary="Source, build inputs, signatures, and vulnerability handling are part of the release." >}}
A release record can include pinned source and dependencies, reproducible builds, SPDX or CycloneDX SBOMs, signed provenance, checksums, immutable references, and upgrade, rollback, and failure tests.

Maintained releases are rebuilt and tested when relevant fixes apply. Public issue handling is best effort; paid scopes can add response times and private advisories.

To report a vulnerability, email [contact@lithespan.com](mailto:contact@lithespan.com?subject=Security%20report) with the release reference, platform, architecture, and enough information to assess the issue. Do not include sensitive customer data in the first message.
{{< /detail >}}

{{< detail id="maintenance" title="Maintenance and support" summary="Each stable target names its owner, support boundary, and end date." >}}
Public stable releases state their version line and support window. Artifacts and evidence are free; community support is best effort.

Paid agreements can add private targets, rebuild schedules, regression reports, controlled distribution, response times, and performance or compatibility obligations. Time-bound extensions may be available after upstream support ends.
{{< /detail >}}

{{< detail id="formats" title="Formats and distribution" summary="Packages, container images, and machine images point to the same tested release." >}}
Outputs can include OCI images, AMIs, Azure managed images or VHDs, Google Cloud custom images, qcow2, OVA, signed native packages, archives, and Nix outputs. Each format points to the same tested build.

Machine images can include the agreed OS, kernel, drivers, runtimes, libraries, and application configuration. Public artifacts need no account. Customer-specific images are delivered privately into the customer’s account or repository.
{{< /detail >}}

## Upstream policy

Changes stay narrow and reviewable. General improvements move upstream when practical.
