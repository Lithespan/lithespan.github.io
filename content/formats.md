---
title: "Formats and distribution"
description: "OCI images, native packages, archives, and Nix outputs produced from one qualified Lithespan release."
date: 2026-08-07
lastmod: 2026-08-07
cta_label: "DELIVERY"
cta_title: "Fit the release to your environment."
cta_body: "Tell us how artifacts must be packaged, signed, distributed, retained, and promoted."
cta_button: "Discuss distribution"
cta_subject: "Lithespan distribution requirements"
---

Delivery formats are projections of one qualified release. Changing the package or registry does not change the payload or its evidence.

## Supported outputs

- **OCI images:** Docker-compatible, multi-architecture images with immutable digests
- **Native packages:** signed Debian, RPM, Alpine, FreeBSD, and compressed archives where supported
- **Nix:** overlays, flakes, derivations, and a binary cache when demand justifies it
- **Release evidence:** checksums, SBOM, provenance, compatibility results, and benchmark reports linked to the same identity

Package-manager indexes can be added for APT, RPM, Alpine, FreeBSD, and Nix. They distribute already-qualified artifacts; they do not trigger separate builds.

## Public and private distribution

Public artifacts do not require an account, API key, private registry, or sales conversation. Customer dependencies, access controls, or policy can require private repositories and caches.

VM and microVM images, appliance profiles, WebAssembly outputs, and embedded targets are considered when the workload and maintenance obligation justify another release surface.

See the [release model](/release-model/) for identity and promotion rules, or review the current [product scope](/products/).
