"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

$(document).ready(function () {
	var lei3Po8h = ["support", ["tuna", "tsinghua", "edu", "cn"].join(".")].join("@");
	$('a#eib1gieB').text(lei3Po8h).attr('href', ["ma", "lto:"].join("i") + lei3Po8h);

	$('.selectpicker').selectpicker();

	var global_options = {
		"options": { "mirror_desc": [{ "name": "AOSP", "desc": "Android 操作系统源代码" }, { "name": "AdoptOpenJDK", "desc": "社区维护的 OpenJDK 二进制包" }, { "name": "AUR", "desc": "Arch Linux 用户软件库" }, { "name": "Bananian", "desc": "为 Banana Pi 制作的，基于官方 Debian 仓库的发行版镜像和软件包仓库" }, { "name": "CPAN", "desc": "Perl 语言软件库" }, { "name": "CRAN", "desc": "R 语言的可执行文件、源代码和说明文件，也收录了各种用户撰写的软件包" }, { "name": "CTAN", "desc": "TeX 的各种发行版、软件包和文档" }, { "name": "CocoaPods", "desc": "Objective-C 和 Swift 的依赖管理器" }, { "name": "ELK", "desc": "现已更名为 Elastic Stack，仅保留用作向后兼容" }, { "name": "FreeCAD", "desc": "基于 Qt 的计算机辅助设计程序" }, { "name": "HHVM", "desc": "Facebook 开发的高性能 PHP 语言虚拟机" }, { "name": "KaOS", "desc": "一个基于 KDE 的独立发行版" }, { "name": "NetBSD", "desc": "NetBSD 的安装镜像和部分系统源码" }, { "name": "OpenBSD", "desc": "OpenBSD 的安装镜像和官方软件包仓库" }, { "name": "VSCodium", "desc": "VS Code 的社区编译版本" }, { "name": "adobe-fonts", "desc": "Adobe 公司的开源字体" }, { "name": "alpine", "desc": "Alpine Linux 的安装镜像和官方软件包仓库" }, { "name": "anaconda", "desc": "用于科学计算的 Python 发行版" }, { "name": "anthon", "desc": "Anthon Linux（安同 Linux）的安装镜像和官方软件包仓库" }, { "name": "aosp-monthly", "desc": "AOSP （Android 系统源码）镜像每月打包" }, { "name": "apache", "desc": "Apache 基金会赞助的各个项目" }, { "name": "arch4edu", "desc": "用于 Arch Linux 和 Arch Linux ARM 的非官方软件仓库，主要包含科研、教学所需的各种常用软件" }, { "name": "archlinux", "desc": "Arch Linux 的安装镜像和官方软件包仓库" }, { "name": "archlinuxarm", "desc": "用于 ARM 平台的 Arch Linux 镜像和软件包仓库" }, { "name": "archlinuxcn", "desc": "由 Arch Linux 中文社区驱动的非官方用户仓库，包含中文用户常用软件、工具、字体/美化包等" }, { "name": "armbian", "desc": "Armbian（面向 ARM 单板机的发行版）的软件源" }, { "name": "armbian-releases", "desc": "Armbian 的安装镜像" }, { "name": "artixlinux", "desc": "Artix Linux 的官方软件包仓库（基于 Arch Linux 的不使用 systemd 的发行版）" }, { "name": "artixlinux-iso", "desc": "Artix Linux 的安装镜像" }, { "name": "bananian", "desc": "用于 Banana Pi 的 Debian 操作系统" }, { "name": "binutils-gdb.git", "desc": "Binutils 和 GDB 等开发工具的源码 Git 仓库" }, { "name": "bioconductor", "desc": "开源的基因数据分析处理工具" }, { "name": "bjlx", "desc": "北京龙芯 & Debian 俱乐部 的公开软件源" }, { "name": "blackarch", "desc": "用于安全评估的基于 Arch Linux 的轻量级发行版" }, { "name": "blender", "desc": "专业的三维计算机图形软件" }, { "name": "cc", "desc": "CERN CentOS" }, { "name": "centos", "desc": "CentOS 的安装镜像和官方软件包仓库" }, { "name": "centos-altarch", "desc": "CentOS 额外平台的安装镜像和官方软件包仓库" }, { "name": "centos-vault", "desc": "为旧版本 CentOS 提供服务的软件包仓库" }, { "name": "ceph", "desc": "高性能对象存储和文件系统" }, { "name": "chakra", "desc": "专注于 Qt 与 KDE 软件的 Linux 发行版" }, { "name": "chakra-releases", "desc": "Chakra 发行版的安装镜像" }, { "name": "chef", "desc": "自动化服务器配置管理工具" }, { "name": "chromiumos", "desc": "Google Chrome OS 的开放源代码开发版本" }, { "name": "clickhouse", "desc": "用于联机分析（OLAP）的列式数据库管理系统" }, { "name": "clojars", "desc": "Clojure 语言的第三方软件包仓库" }, { "name": "crates.io-index.git", "desc": "面向 Rust 语言的软件包索引 crates.io" }, { "name": "ctex", "desc": "旧版 CTEX 安装镜像存档" }, { "name": "cygwin", "desc": "Cygwin 官方软件包仓库" }, { "name": "dart-pub", "desc": "Dart 语言的软件包仓库" }, { "name": "debian", "desc": "Debian Linux 的官方软件包仓库" }, { "name": "debian-cd", "desc": "Debian Linux 的安装镜像" }, { "name": "debian-multimedia", "desc": "Debian Linux 第三方多媒体软件源" }, { "name": "debian-nonfree", "desc": "Debian Linux 的非自由软件包仓库" }, { "name": "debian-security", "desc": "Debian Linux 的安全更新" }, { "name": "deepin", "desc": "Deepin Linux 的官方软件包仓库" }, { "name": "deepin-cd", "desc": "Deepin Linux 的安装镜像" }, { "name": "dell", "desc": "Dell 服务器管理工具" }, { "name": "docker-ce", "desc": "Docker Community Edition 的安装包" }, { "name": "dotdeb", "desc": "用于 Debian 服务器的额外镜像源" }, { "name": "eclipse", "desc": "著名的集成开发环境 Eclipse" }, { "name": "elasticstack", "desc": "ELK 系列数据分析工具，5.x 之后改名为 Elastic Stack" }, { "name": "elpa", "desc": "Emacs 内建包管理器 package.el 的软件源" }, { "name": "elrepo", "desc": "RHEL 及其变体的 RPM 软件包仓库" }, { "name": "elvish", "desc": "TUNA 前会长 xiaq 开发的革命性 Shell" }, { "name": "epel", "desc": "企业版 Linux 附加软件包" }, { "name": "erlang-solutions", "desc": "为各大 Linux 发行版提供的 Erlang 软件包" }, { "name": "fdroid", "desc": "F-Droid 是 Android 上的自由与开源软件应用商店" }, { "name": "fedora", "desc": "Fedora Linux 的安装镜像和官方软件包仓库" }, { "name": "fedora-altarch", "desc": "Fedora Linux 额外平台的安装镜像和官方软件包仓库" }, { "name": "flightgear", "desc": "多平台的飞行模拟器" }, { "name": "flutter", "desc": "Flutter 框架 SDK 镜像" }, { "name": "flutter-sdk.git", "desc": "Flutter 框架源码镜像" }, { "name": "fzug", "desc": "Fedora 中文用户组的软件包仓库" }, { "name": "gcc.git", "desc": "GCC 的源码仓库" }, { "name": "gentoo", "desc": "Gentoo Linux 的 Stage 3 镜像" }, { "name": "gentoo-portage", "desc": "Gentoo Linux 的 Portage 包管理器镜像源（HTTP / rsync 访问）" }, { "name": "gentoo-portage.git", "desc": "Gentoo Linux 的 Portage 包管理器镜像源（Git 访问）" }, { "name": "gentoo-portage-prefix", "desc": "Gentoo/Prefix 的 Portage 包管理器镜像源（仅适用于 macOS）" }, { "name": "git-for-windows", "desc": "Git 工具的 Windows 系统版本" }, { "name": "git-repo", "desc": "Google 开发的项目依赖下载工具 repo 的镜像" }, { "name": "github-release", "desc": "一些项目的 Github Release 镜像" }, { "name": "gitlab-ce", "desc": "Gitlab 社区版" }, { "name": "gitlab-ci-multi-runner", "desc": "GitLab 持续集成框架，已更名为 gitlab-runner" }, { "name": "gitlab-ee", "desc": "Gitlab 企业版" }, { "name": "gitlab-runner", "desc": "GitLab 持续集成框架版本 10 及以上" }, { "name": "glibc.git", "desc": "GNU C Library 的源码 Git 仓库" }, { "name": "gnu", "desc": "GNU 项目的软件包（源代码、文档和部分平台的二进制文件）" }, { "name": "gnu-alpha", "desc": "一些尚未达到生产质量的 GNU 项目的软件包" }, { "name": "grafana", "desc": "开源的数据可视化工具" }, { "name": "hackage", "desc": "Haskell 社区的中心软件包仓库" }, { "name": "homebrew", "desc": "Homebrew/Linuxbrew 的 taps（软件包描述文件 Git 仓库）" }, { "name": "homebrew-bottles", "desc": "预编译的 Homebrew 软件包" }, { "name": "iina", "desc": "macOS 上的现代化开源视频播放器" }, { "name": "infinality-bundle", "desc": "Arch Linux 的字体渲染软件包" }, { "name": "influxdata", "desc": "时间序列数据平台" }, { "name": "ius", "desc": "为企业版 Linux 提供最新软件包的镜像源" }, { "name": "jenkins", "desc": "用 Java 编写的持续集成框架" }, { "name": "julia", "desc": "Julia 编程语言的包管理器镜像" }, { "name": "julia-general.git", "desc": "Julia 软件包注册表" }, { "name": "julia-releases", "desc": "Julia 二进制程序镜像" }, { "name": "kali", "desc": "Kali Linux 的官方软件包仓库" }, { "name": "kali-images", "desc": "Kali Linux 的安装镜像" }, { "name": "kali-security", "desc": "Kali Linux 的安全更新" }, { "name": "kde", "desc": "KDE主源码镜像" }, { "name": "kde-application", "desc": "KDE应用程序源码镜像" }, { "name": "kde-neon", "desc": "KDE社区维护的一个基于Ubuntu LTS的Linux发行版" }, { "name": "kernel", "desc": "各个版本的 Linux 内核源代码压缩包和补丁" }, { "name": "kicad", "desc": "开源的电路原理图与 PCB 设计工具" }, { "name": "kodi", "desc": "开源的多媒体播放器，原名 XBMC" }, { "name": "kubernetes", "desc": "Kubernetes 是用于集群自动部署和管理的开源系统" }, { "name": "libreoffice", "desc": "自由的办公软件套件" }, { "name": "lineage-rom", "desc": "最大的社区Android发行版之一Lineage的ROM" }, { "name": "lineageOS", "desc": "最大的社区Android发行版之一Lineage的源代码" }, { "name": "linux-firmware.git", "desc": "Linux 内核附带的固件 Git 仓库" }, { "name": "linux-next.git", "desc": "Linux 内核源代码的 Git 仓库，开发分支（包含为下一个 merge windows 开发的 patch）" }, { "name": "linux-stable.git", "desc": "Linux 内核源代码的 Git 仓库, 稳定版分支" }, { "name": "linux.git", "desc": "Linux 内核源代码的 Git 仓库" }, { "name": "linuxbrew-bottles", "desc": "预编译的 Linuxbrew 软件包" }, { "name": "linuxmint", "desc": "Linux Mint 的官方软件源" }, { "name": "linuxmint-cd", "desc": "Linux Mint 的安装镜像" }, { "name": "llvm", "desc": "LLVM 编译器套件的多个 git repo 的镜像" }, { "name": "llvm-apt", "desc": "LLVM 编译器套件的 APT 安装源" }, { "name": "llvm-binary", "desc": "LLVM 编译器套件可执行文件" }, { "name": "loongson", "desc": "用于龙芯电脑的软件包" }, { "name": "lxc-images", "desc": "Linux 容器的镜像" }, { "name": "lyx", "desc": "所见即所指的 LaTeX 编辑器" }, { "name": "macports", "desc": "macOS 的一个开源软件包管理系统" }, { "name": "mageia", "desc": "Mageia Linux（衍生于 Mandriva Linux）的安装镜像和官方软件包仓库" }, { "name": "manjaro", "desc": "Manjaro Linux 的官方软件源" }, { "name": "manjaro-cd", "desc": "Manjanro Linux 的安装镜像" }, { "name": "manjaro-arm", "desc": "Manjaro ARM Linux 的官方软件源" }, { "name": "manjaro-arm-cd", "desc": "Manjanro ARM Linux 的安装镜像" }, { "name": "mariadb", "desc": "衍生于 MySQL 的开源关系数据库" }, { "name": "miniforge", "desc": "适用于 conda-forge 的最小化 conda 安装器" }, { "name": "mongodb", "desc": "开源的跨平台 NoSQL 文档型数据库" }, { "name": "msys2", "desc": "用于编译原生 Windows 程序的类 Linux 开发环境" }, { "name": "mxlinux", "desc": "基于 Debian 的中量级的 Linux 发行版" }, { "name": "mxlinux-isos", "desc": "MX Linux 的安装镜像" }, { "name": "mysql", "desc": "MySQL 数据库的安装包及各种工具下载" }, { "name": "neurodebian", "desc": "用于神经科学研究的 Debian 软件包源" }, { "name": "nix", "desc": "Nix 软件包管理器" }, { "name": "nix-channels", "desc": "Nixpkgs 软件包发行版" }, { "name": "nixos-images", "desc": "NixOS 的安装镜像和虚拟机镜像" }, { "name": "nodejs-release", "desc": "预编译的 Node.js 二进制程序" }, { "name": "nodesource", "desc": "为 Debian, Ubuntu, Fedora, RHEL 等发行版提供预编译的 Node.js 和 npm 等软件包" }, { "name": "openeuler", "desc": "华为公司开源的服务器操作系统" }, { "name": "OpenMediaVault", "desc": "基于 Debian Linux 的网络附加存储(NAS)解决方案" }, { "name": "openresty", "desc": "基于 Nginx 与 Lua 的高性能 Web 平台" }, { "name": "opensuse", "desc": "openSUSE 的安装镜像和官方软件包仓库" }, { "name": "openthos", "desc": "OpenTHOS 的二进制发行包" }, { "name": "openthos-src", "desc": "OpenTHOS 源代码仓库" }, { "name": "openwrt", "desc": "OpenWrt/LEDE 软件包镜像源" }, { "name": "opnsense", "desc": "OPNsense 是基于 FreeBSD 的防火墙和路由软件" }, { "name": "osdn", "desc": "OSDN 网站提供的开源软件下载" }, { "name": "osmc", "desc": "免费、开源的媒体中心解决方案" }, { "name": "packagist", "desc": "PHP 语言社区软件包索引" }, { "name": "packman", "desc": "为 Debian、Fedora、openSUSE、Ubuntu 提供额外和过期软件包的仓库" }, { "name": "parrot", "desc": "Parrot Linux（专注于安全审计的 Linux 发行版）的安装映像和官方软件源" }, { "name": "percona", "desc": "开源的数据库解决方案，详见 http://www.percona.com" }, { "name": "pkgsrc", "desc": "NetBSD 的第三方软件源" }, { "name": "postgresql", "desc": "著名的开源关系型数据库 PostgreSQL 的镜像" }, { "name": "prometheus", "desc": "一个系统与服务监控系统" }, { "name": "proxmox", "desc": "服务器虚拟化环境 Linux 发行版 Proxmox VE" }, { "name": "puppy", "desc": "为家用电脑设计的轻量级 Linux 发行版" }, { "name": "pybombs", "desc": "为 GNU Radio 设计的编译管理系统" }, { "name": "pypi", "desc": "Python 软件包索引源" }, { "name": "qemu.git", "desc": "处理器模拟器 QEMU 的源码 Git 仓库" }, { "name": "qubesos", "desc": "一个面向安全的桌面操作系统，利用虚拟化技术隔离应用来提供安全保障" }, { "name": "qt", "desc": "跨平台软件开发库 Qt 的源码、开发工具、文档等" }, { "name": "racket-installers", "desc": "Racket 语言环境安装包" }, { "name": "raspberrypi", "desc": "一些专为树莓派提供的 Debian 软件包" }, { "name": "raspberry-pi-os", "desc": "Raspberry Pi OS （原 Raspbian）系统软件源" }, { "name": "raspberry-pi-os-images", "desc": "Raspberry Pi OS （原 Raspbian）的安装镜像" }, { "name": "redhat", "desc": "Red Hat Enterprise Linux 源码包（SRPM）仓库" }, { "name": "remi", "desc": "包含最新版本 PHP 和 MySQL 的第三方 yum 源" }, { "name": "repo-ck", "desc": "repo-ck 是 Arch 的非官方仓库，内有包含 ck 补丁、BFS 调度器等" }, { "name": "repoforge", "desc": "Repoforge 是 RHEL 系统下的软件仓库，拥有 10000 多个软件包，被认为是最安全、最稳定的一个软件仓库" }, { "name": "ros", "desc": "ROS提供一系列程序库和工具以帮助软件开发者创建机器人应用软件" }, { "name": "ros2", "desc": "ROS (Robot Operating System) 2.0 版本" }, { "name": "rpmfusion", "desc": "RPM Fusion 提供了一些 Fedora Project 和 Red Hat 不包含的软件" }, { "name": "rubygems", "desc": "Ruby 的一个包管理器" }, { "name": "rudder", "desc": "自动化 IT 基础设施配置与审计工具" }, { "name": "rustup", "desc": "Rust 的官方安装工具" }, { "name": "sagemath", "desc": "构建在 NumPy, SciPy 等工具之上的开源数学软件系统" }, { "name": "saltstack", "desc": "基于 python 的配置管理与运维自动化工具" }, { "name": "slackware", "desc": "Linux 发行版 Slackware 的源代码和官方软件包仓库" }, { "name": "slackwarearm", "desc": "用于 ARM 设备的 Slackware 发行版源代码和官方软件包仓库" }, { "name": "solus", "desc": "Solus 的软件仓库，致力于制作对新手友好的发行版" }, { "name": "stackage", "desc": "Haskell 项目管理器 stack 所需的元数据与 ghc 安装包的镜像" }, { "name": "steamos", "desc": "Valve 开发的基于 Debian 的操作系统，包含安装镜像和官方软件包仓库" }, { "name": "tensorflow", "desc": "采用数据流图、用于数值计算的开源深度学习框架 TensorFlow" }, { "name": "termux", "desc": "运行在 Android 上的终端模拟器 Termux 的官方软件包仓库" }, { "name": "tinycorelinux", "desc": "为嵌入式开发的微型 Linux 发行版" }, { "name": "tlpretest", "desc": "TeX Live 测试版本的软件包仓库与安装镜像" }, { "name": "ubuntu", "desc": "流行的 Linux 发行版 Ubuntu 的安装镜像和官方软件包仓库" }, { "name": "ubuntu-cdimage", "desc": "Ubuntu 及 Ubuntu 衍生版各版本安装镜像" }, { "name": "ubuntu-cloud-images", "desc": "适用于公有云的 Ubuntu 安装镜像" }, { "name": "ubuntu-ports", "desc": "armhf, arm64 以及 powerpc 等平台的 Ubuntu 软件仓库" }, { "name": "ubuntu-releases", "desc": "包含近几年发行的 Ubuntu 的镜像" }, { "name": "videolan-ftp", "desc": "简称VLC，是一款自由、开源的跨平台多媒体播放器及框架，可播放大多数多媒体文件" }, { "name": "virtualbox", "desc": "Oracle 的开源的 x86 架构虚拟机" }, { "name": "weave", "desc": "Google 开发的物联网（IoT）设备通信平台" }, { "name": "voidlinux", "desc": "基于 xbps 包管理器的独立 Linux 发行版" }, { "name": "winehq", "desc": "Wine （允许类 Unix 操作系统运行 Windows 程序）" }, { "name": "zabbix", "desc": "著名的网络监视、管理系统" }], "new_mirrors": ["chef", "rudder", "OpenMediaVault", "kde", "kde-application", "kde-neon", "gentoo-portage.git", "KaOS", "openeuler", "opnsense", "julia", "julia-releases", "julia-general.git", "miniforge"], "unlisted_mirrors": [{ "status": "success", "last_update": "-", "name": "AUR", "url": "https://aur.tuna.tsinghua.edu.cn/", "upstream": "https://aur.archlinux.org/", "is_master": true }, { "link_to": "osdn", "name": "manjaro-cd", "url": "/osdn/storage/g/m/ma/manjaro/" }, { "link_to": "osdn", "name": "manjaro-arm-cd", "url": "/osdn/storage/g/m/ma/manjaro-arm/" }, { "link_to": "osdn", "name": "mxlinux-isos", "url": "/osdn/storage/g/m/mx/mx-linux/ISOs/" }, { "link_to": "github-release", "name": "prometheus", "url": "/github-release/prometheus/prometheus/" }, { "link_to": "github-release", "name": "iina", "url": "/github-release/iina/iina/" }, { "link_to": "github-release", "name": "VSCodium", "url": "/github-release/VSCodium/vscodium/" }, { "link_to": "github-release", "name": "FreeCAD", "url": "/github-release/FreeCAD/FreeCAD/" }, { "link_to": "github-release", "name": "git-for-windows", "url": "/github-release/git-for-windows/git/" }, { "link_to": "github-release", "name": "llvm-binary", "url": "/github-release/llvm/llvm-project/" }, { "link_to": "github-release", "name": "miniforge", "url": "/github-release/conda-forge/miniforge/" }], "force_help_mirrors": ["AOSP", "lineageOS", "homebrew", "linux.git", "linux-next.git", "linux-stable.git", "git-repo", "gentoo-portage.git", "chromiumos", "weave", "CocoaPods", "llvm", "openthos-src", "qemu.git", "linux-firmware.git", "gcc.git", "crates.io-index.git", "binutils-gdb.git", "glibc.git", "flutter-sdk.git", "julia-general.git"], "label_map": { "unknown": "label-default", "syncing": "label-info", "success": "label-success", "fail": "label-warning", "failed": "label-warning", "paused": "label-warning" } },
		"helps": [{ "url": "/help/julia-general.git/", "mirrorid": "julia-general.git" }, { "url": "/help/julia/", "mirrorid": "julia" }, { "url": "/help/julia-releases/", "mirrorid": "julia-releases" }, { "url": "/help/gentoo-portage.git/", "mirrorid": "gentoo-portage.git" }, { "url": "/help/tlpretest/", "mirrorid": "tlpretest" }, { "url": "/help/gentoo-prefix/", "mirrorid": "gentoo-portage-prefix" }, { "url": "/help/kicad/", "mirrorid": "kicad" }, { "url": "/help/solus/", "mirrorid": "solus" }, { "url": "/help/qubesos/", "mirrorid": "qubesos" }, { "url": "/help/arch4edu/", "mirrorid": "arch4edu" }, { "url": "/help/flutter/", "mirrorid": "flutter" }, { "url": "/help/dart-pub/", "mirrorid": "dart-pub" }, { "url": "/help/nix/", "mirrorid": "nix" }, { "url": "/help/rustup/", "mirrorid": "rustup" }, { "url": "/help/grafana/", "mirrorid": "grafana" }, { "url": "/help/anthon/", "mirrorid": "anthon" }, { "url": "/help/gentoo-portage/", "mirrorid": "gentoo-portage" }, { "url": "/help/openthos-src/", "mirrorid": "openthos-src" }, { "url": "/help/CTAN/", "mirrorid": "CTAN" }, { "url": "/help/llvm/", "mirrorid": "llvm" }, { "url": "/help/CRAN/", "mirrorid": "CRAN" }, { "url": "/help/bioconductor/", "mirrorid": "bioconductor" }, { "url": "/help/rubygems/", "mirrorid": "rubygems" }, { "url": "/help/repoforge/", "mirrorid": "repoforge" }, { "url": "/help/virtualbox/", "mirrorid": "virtualbox" }, { "url": "/help/alpine/", "mirrorid": "alpine" }, { "url": "/help/voidlinux/", "mirrorid": "voidlinux" }, { "url": "/help/ubuntu/", "mirrorid": "ubuntu" }, { "url": "/help/termux/", "mirrorid": "termux" }, { "url": "/help/tensorflow/", "mirrorid": "tensorflow" }, { "url": "/help/stackage/", "mirrorid": "stackage" }, { "url": "/help/rudder/", "mirrorid": "rudder" }, { "url": "/help/rpmfusion/", "mirrorid": "rpmfusion" }, { "url": "/help/ros2/", "mirrorid": "ros2" }, { "url": "/help/ros/", "mirrorid": "ros" }, { "url": "/help/repo-ck/", "mirrorid": "repo-ck" }, { "url": "/help/raspbian/", "mirrorid": "raspberry-pi-os" }, { "url": "/help/qemu.git/", "mirrorid": "qemu.git" }, { "url": "/help/pypi/", "mirrorid": "pypi" }, { "url": "/help/pybombs/", "mirrorid": "pybombs" }, { "url": "/help/proxmox/", "mirrorid": "proxmox" }, { "url": "/help/packagist/", "mirrorid": "packagist" }, { "url": "/help/openwrt/", "mirrorid": "openwrt" }, { "url": "/help/nodesource/", "mirrorid": "nodesource" }, { "url": "/help/nodejs-release/", "mirrorid": "nodejs-release" }, { "url": "/help/mysql/", "mirrorid": "mysql" }, { "url": "/help/msys2/", "mirrorid": "msys2" }, { "url": "/help/mongodb/", "mirrorid": "mongodb" }, { "url": "/help/mariadb/", "mirrorid": "mariadb" }, { "url": "/help/lxc-images/", "mirrorid": "lxc-images" }, { "url": "/help/linuxbrew-bottles/", "mirrorid": "linuxbrew-bottles" }, { "url": "/help/linux.git/", "mirrorid": "linux.git" }, { "url": "/help/linux-stable.git/", "mirrorid": "linux-stable.git" }, { "url": "/help/linux-next.git/", "mirrorid": "linux-next.git" }, { "url": "/help/linux-firmware.git/", "mirrorid": "linux-firmware.git" }, { "url": "/help/lineageOS/", "mirrorid": "lineageOS" }, { "url": "/help/lineage-rom/", "mirrorid": "lineage-rom" }, { "url": "/help/kubernetes/", "mirrorid": "kubernetes" }, { "url": "/help/homebrew/", "mirrorid": "homebrew" }, { "url": "/help/homebrew-bottles/", "mirrorid": "homebrew-bottles" }, { "url": "/help/hackage/", "mirrorid": "hackage" }, { "url": "/help/glibc.git/", "mirrorid": "glibc.git" }, { "url": "/help/gitlab-runner/", "mirrorid": "gitlab-runner" }, { "url": "/help/gitlab-ci-multi-runner/", "mirrorid": "gitlab-ci-multi-runner" }, { "url": "/help/gitlab-ce/", "mirrorid": "gitlab-ce" }, { "url": "/help/git-repo/", "mirrorid": "git-repo" }, { "url": "/help/gcc.git/", "mirrorid": "gcc.git" }, { "url": "/help/flutter-sdk.git/", "mirrorid": "flutter-sdk.git" }, { "url": "/help/fedora/", "mirrorid": "fedora" }, { "url": "/help/fdroid/", "mirrorid": "fdroid" }, { "url": "/help/epel/", "mirrorid": "epel" }, { "url": "/help/elpa/", "mirrorid": "elpa" }, { "url": "/help/docker-ce/", "mirrorid": "docker-ce" }, { "url": "/help/debian/", "mirrorid": "debian" }, { "url": "/help/cygwin/", "mirrorid": "cygwin" }, { "url": "/help/crates.io-index.git/", "mirrorid": "crates.io-index.git" }, { "url": "/help/clickhouse/", "mirrorid": "clickhouse" }, { "url": "/help/chromiumos/", "mirrorid": "chromiumos" }, { "url": "/help/chef/", "mirrorid": "chef" }, { "url": "/help/centos/", "mirrorid": "centos" }, { "url": "/help/binutils-gdb.git/", "mirrorid": "binutils-gdb.git" }, { "url": "/help/bananian/", "mirrorid": "bananian" }, { "url": "/help/archlinuxcn/", "mirrorid": "archlinuxcn" }, { "url": "/help/archlinux/", "mirrorid": "archlinux" }, { "url": "/help/AOSP/", "mirrorid": "AOSP" }, { "url": "/help/anaconda/", "mirrorid": "anaconda" }, { "url": "/help/adoptopenjdk/", "mirrorid": "AdoptOpenJDK" }, { "url": "/help/CocoaPods/", "mirrorid": "CocoaPods" }, { "url": "/help/AUR/", "mirrorid": "AUR" }]
	};
	var label_map = global_options.options.label_map;
	var help_url = {};
	global_options.helps.forEach(function (h) {
		return help_url[h.mirrorid] = h.url;
	});
	var new_mirrors = {};
	global_options.options.new_mirrors.forEach(function (m) {
		return new_mirrors[m] = true;
	});
	var unlisted = global_options.options.unlisted_mirrors;
	var options = {};
	global_options.options.force_help_mirrors.forEach(function (m) {
		return options[m] = { 'url': "/help/" + m + "/" };
	});
	var descriptions = {};
	global_options.options.mirror_desc.forEach(function (m) {
		return descriptions[m.name] = m.desc;
	});

	new Vue({
		el: "#upgrade-mask"
	});

	var vmMirList = new Vue({
		el: "#mirror-list",
		data: {
			test: "hello",
			mirrorList: [],
			filter: "",
			rawMirrorList: [],
			dateTooltip: localStorage.getItem('DateTooltip') !== 'false'
		},
		created: function created() {
			this.refreshMirrorList();
		},
		updated: function updated() {
			$('.mirror-item-label').popover();
		},
		computed: {
			nowBrowsingMirror: function nowBrowsingMirror() {
				var mirrorName = location.pathname.split('/')[1];
				if (!mirrorName) {
					return false;
				}
				mirrorName = mirrorName.toLowerCase();
				var result = this.mirrorList.filter(function (m) {
					return m.name.toLowerCase() === mirrorName;
				})[0];
				if (!result) {
					return false;
				}
				return result;
			},
			filteredMirrorList: function filteredMirrorList() {
				var filter = this.filter.toLowerCase();
				return this.mirrorList.filter(function (m) {
					return m.is_master && m.name.toLowerCase().indexOf(filter) !== -1;
				});
			}
		},
		methods: {
			getURL: function getURL(mir) {
				if (mir.url !== undefined) {
					return mir.url;
				}
				return "/" + mir.name + "/";
			},
			refreshMirrorList: function refreshMirrorList() {
				var self = this;
				$.getJSON("/static/tunasync.json", function (status_data) {
					var unlisted_mir = unlisted.map(function (d) {
						return processMirrorItem(d);
					});
					status_data = status_data.map(function (d) {
						return processMirrorItem(d);
					});
					var mir_data = $.merge(unlisted_mir, status_data);
					mir_data = processLinkItem(mir_data);
					status_data = sortAndUniqMirrors(status_data);
					mir_data = sortAndUniqMirrors(mir_data).filter(function (d) {
						return !(d.status == "disabled");
					});
					self.mirrorList = mir_data;
					self.rawMirrorList = status_data;
					setTimeout(function () {
						self.refreshMirrorList();
					}, 10000);
				});
			}
		}
	});

	var stringifyTime = function stringifyTime(ts) {
		var date = new Date(ts * 1000);
		var str = "";
		var ago = "";
		if (date.getFullYear() > 2000) {
			str = ('000' + date.getFullYear()).substr(-4) + "-" + ('0' + (date.getMonth() + 1)).substr(-2) + "-" + ('0' + date.getDate()).substr(-2) + (" " + ('0' + date.getHours()).substr(-2) + ":" + ('0' + date.getMinutes()).substr(-2));
			ago = timeago.format(date);
		} else {
			str = "0000-00-00 00:00";
			ago = "Never";
		}
		return [str, ago];
	};

	var sortAndUniqMirrors = function sortAndUniqMirrors(mirs) {
		mirs.sort(function (a, b) {
			return a.name < b.name ? -1 : 1;
		});
		return mirs.reduce(function (acc, cur) {
			if (acc.length > 1 && acc[acc.length - 1].name == cur.name) {
				if (acc[acc.length - 1].last_update_ts && cur.last_update_ts) {
					if (acc[acc.length - 1].last_update_ts < cur.last_update_ts) {
						acc[acc.length - 1] = cur;
					}
				} else if (cur.last_update_ts) {
					acc[acc.length - 1] = cur;
				}
			} else {
				acc.push(cur);
			}
			return acc;
		}, []);
	};

	var processLinkItem = function processLinkItem(mirrors) {
		var processed = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = mirrors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var d = _step.value;

				if (d.link_to === undefined) {
					processed.push(d);
					continue;
				}
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = mirrors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var target = _step2.value;

						if (d.link_to === target.name) {
							d.status = target.status;
							d.label = target.label;
							d.upstream = target.upstream;
							d.show_status = target.show_status;
							d.last_update = target.last_update;
							d.last_update_ago = target.last_update_ago;
							d.last_ended = target.last_ended;
							d.last_ended_ago = target.last_ended_ago;
							d.last_schedule = target.last_schedule;
							d.last_schedule_ago = target.last_schedule_ago;
							processed.push(d);
							break;
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return processed;
	};

	var processMirrorItem = function processMirrorItem(d) {
		if (options[d.name] != undefined) {
			d = $.extend(d, options[d.name]);
		}
		d.help_url = help_url[d.name];
		d.is_new = new_mirrors[d.name];
		d.description = descriptions[d.name];
		if (d.is_master === undefined) {
			d.is_master = true;
		}
		if (d.link_to !== undefined) {
			return d;
		}
		d.label = label_map[d.status];
		d.show_status = d.status != "success";
		// Strip the second component of last_update

		var _stringifyTime = stringifyTime(d.last_update_ts);

		var _stringifyTime2 = _slicedToArray(_stringifyTime, 2);

		d.last_update = _stringifyTime2[0];
		d.last_update_ago = _stringifyTime2[1];

		var _stringifyTime3 = stringifyTime(d.last_ended_ts);

		var _stringifyTime32 = _slicedToArray(_stringifyTime3, 2);

		d.last_ended = _stringifyTime32[0];
		d.last_ended_ago = _stringifyTime32[1];

		var _stringifyTime4 = stringifyTime(d.last_started_ts);

		var _stringifyTime42 = _slicedToArray(_stringifyTime4, 2);

		d.last_started = _stringifyTime42[0];
		d.last_started_ago = _stringifyTime42[1];

		var _stringifyTime5 = stringifyTime(d.next_schedule_ts);

		var _stringifyTime52 = _slicedToArray(_stringifyTime5, 2);

		d.next_schedule = _stringifyTime52[0];
		d.next_schedule_ago = _stringifyTime52[1];

		return d;
	};

	var vmIso = new Vue({
		el: "#isoModal",
		data: {
			distroList: [],
			selected: {},
			curCategory: "os"
		},
		created: function created() {
			var self = this;
			$.getJSON("/static/status/isoinfo.json", function (isoinfo) {
				self.distroList = isoinfo;
				self.selected = self.curDistroList[0];
				if (window.location.hash.match(/#iso-download(\?.*)?/)) {
					$('#isoModal').modal();
				}
			});
		},
		computed: {
			curDistroList: function curDistroList() {
				var _this = this;

				return this.distroList.filter(function (x) {
					return x.category === _this.curCategory;
				}).sort(function (a, b) {
					return a.distro.localeCompare(b.distro);
				});
			}
		},
		methods: {
			showCategory: function showCategory(category) {
				return this.distroList.findIndex(function (x) {
					return x.category === category;
				}) > -1;
			},
			switchDistro: function switchDistro(distro) {
				this.selected = distro;
			},
			switchCategory: function switchCategory(category) {
				this.curCategory = category;
				this.selected = this.curDistroList[0];
			}
		}
	});
});

// vim: ts=2 sts=2 sw=2 noexpandtab