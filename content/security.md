---
title: "Security and supply chain"
description: "SBOMs, provenance, signatures, vulnerability handling, and rebuild records for maintained Lithespan releases."
date: 2026-08-07
lastmod: 2026-08-07
cta_label: "SECURITY REVIEW"
cta_title: "Bring us your release requirements."
cta_body: "We can scope evidence formats, distribution controls, update obligations, and response terms."
cta_button: "Discuss security requirements"
cta_subject: "Lithespan security requirements"
---

Optimization cannot weaken the declared security, compatibility, or operating boundary. These controls are part of the release, not a separate claim.

## Release record

A maintained release includes:

- Pinned upstream source, dependencies, toolchain, and build inputs
- Reproducible or hermetic builds where the upstream permits them
- SPDX or CycloneDX SBOMs
- Signed provenance, artifact signatures, checksums, and immutable references
- Compatibility, architecture, upgrade, rollback, and failure tests
- Known limitations, patch policy, support state, and deprecation history

VEX statements add context when a reported vulnerability does not affect the shipped configuration. Debug symbols and recovery artifacts are included when safe operation requires them.

## Vulnerabilities and rebuilds

Lithespan monitors dependencies for maintained targets. When an upstream fix applies, the affected release is rebuilt and requalified under its [maintenance agreement](/maintenance/).

Public issue handling is best effort. Contractual response times, private advisories, and incident obligations apply only to purchased, defined scopes.

## Base systems

Releases can use established Debian, Ubuntu, Alpine, UBI, Nix, FreeBSD, or security-focused package sources. Substrate choice follows the workload and operating policy. A lower scanner count alone does not prove that one release is safer than another.

## Report a vulnerability

Email [contact@lithespan.com](mailto:contact@lithespan.com?subject=Security%20report) with the release reference, platform, architecture, and enough information to assess the issue. Do not include sensitive customer data in the first message.
