---
title: "Products"
description: "Optimized compilers, runtimes, infrastructure software, OS packages, and OCI images for declared hardware and operating-system targets."
date: 2026-08-07
lastmod: 2026-08-07
cta_label: "PRIVATE RELEASES"
cta_title: "Need a target we do not publish?"
cta_body: "Send us the software, OS, CPU, workload, output format, and support window."
cta_button: "Discuss a private release"
cta_subject: "Lithespan private release"
---

Lithespan builds maintained releases from upstream source for a declared operating system, CPU, workload, and delivery format. Public releases are free and include their build definitions and evidence.

## Compilers and runtimes

Targets include C and C++ toolchains, Go, Java and JVM components, JavaScript and TypeScript runtimes such as Node.js, Deno, and Bun, .NET, Python, Ruby, and Rust.

Optimization can cover PGO and LTO, compiler flags, JIT or AOT policy, garbage collection, allocators, linking, native libraries, startup behavior, and architecture-specific code paths. The useful choices depend on the runtime and workload.

## Infrastructure software

Candidate targets include:

- NGINX, HAProxy, and Envoy
- Kafka and RabbitMQ
- PostgreSQL and MySQL
- Redis, Valkey, and Memcached
- etcd, containerd, Cilium, and selected service-mesh data planes

Qualification reflects how the software runs. Database results state durability and storage assumptions. Messaging results state topology, replication, backpressure, and failure behavior. Kubernetes components include their kernel, eBPF, CNI, network, storage, and compatibility requirements.

## Operating-system packages

Native packages and binaries target a declared distribution, libc, system ABI, architecture, and dependency boundary. Outputs can include Debian, RPM, Alpine, FreeBSD, Nix, and signed archives.

## OCI images

Docker-compatible images use the same qualified payload as native packages and archives. Immutable references connect each image to its benchmark, compatibility, SBOM, provenance, and support records.

## What reaches stable support

A successful build is only a candidate. A target becomes stable when Lithespan can maintain its upstream watch, test suite, benchmark baseline, release pipeline, supported outputs, and end-of-support date. See the [release model](/release-model/) for the full qualification standard.
