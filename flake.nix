{
  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      {
        devShell =
          with pkgs;
          mkShell {
            buildInputs = [
              go_1_24 # must match GO_VERSION in Dockerfile
              nodejs_24 # for Pulumi, must match values in package.json
            ];
          };
      }
    );
}
