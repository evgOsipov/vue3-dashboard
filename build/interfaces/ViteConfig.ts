export interface ViteConfigPaths {
  src: string;
}

export interface ViteConfigOptions {
  mode: string;
  paths: ViteConfigPaths;
}

export interface ViteConfigEnvVariables {
  port: string;
}
