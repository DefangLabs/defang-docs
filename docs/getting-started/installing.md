---
sidebar_position: 100
title: Installing
description: How to install Defang.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to Install Defang

Defang doesn't require installing anything in your cloud, but you will need to install the [open source](https://github.com/DefangLabs/defang) Defang command line interface (CLI) to interact with your Defang resources and account.

We offer a few different ways to install the Defang CLI. You can use a bash script, Homebrew, Winget, or you can download the binary directly.


<Tabs>
  <TabItem value="bash" label="Bash">
    **Using a Bash Script**

    You can install the Defang CLI using a bash script. Run the following command in your terminal:

    ```bash
    . <(curl -Ls s.defang.io/install)
    ```

    The script will try to download the appropriate binary for your operating system and architecture, add it to `~/.local/bin`, and add `~/.local/bin` to your `PATH` if it's not already there, with your permission. If you do not provide permission it will print an appropriate instruction for you to follow to add it manually. You can also customize the installation directory by setting the `INSTALL_DIR` environment variable before running the script.
  </TabItem>
  <TabItem value="homebrew" label="Homebrew" default>
    **Using Homebrew**

    You can easily install the Defang CLI using [Homebrew](https://brew.sh/). Run the following command in your terminal:

    ```bash
    brew install DefangLabs/defang/defang
    ```
  </TabItem>
  <TabItem value="winget" label="Winget">
    **Using Winget**

    On Windows, you can install the Defang CLI using `winget`. Run the following command in your terminal:

    ```powershell
    winget install defang
    ```
  </TabItem>
  <TabItem value="nix" label="Nix">
    **Using Nix**

    ```bash
    nix profile install github:DefangLabs/defang#defang-bin --refresh
    ```
  </TabItem>
  <TabItem value="direct" label="Direct Download">
    **Direct Download**

    You can find the latest version of the Defang CLI on the [latest release page](https://github.com/DefangLabs/defang/releases/latest). Just download the appropriate binary for your operating system and architecture, and put it somewhere in your `PATH`.
  </TabItem>
</Tabs>
