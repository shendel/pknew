// tsup.config.ts
import { defineConfig } from "tsup";
import { exec } from "child_process";
var tsup_config_default = defineConfig((options) => ({
  entry: {
    index: "./src/index.ts"
  },
  format: ["esm", "cjs"],
  dts: false,
  clean: !options.watch,
  treeshake: true,
  splitting: true,
  onSuccess: async () => {
    exec("tsc --emitDeclarationOnly --declaration", (err, stdout) => {
      if (err) {
        console.error(stdout);
        if (!options.watch) {
          process.exit(1);
        }
      }
    });
  }
}));
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcV09SS1xcXFxXZWJTZXJ2ZXJzXFxcXGhvbWVcXFxcbG9jYWxob3N0XFxcXHd3d1xcXFxtYWluXFxcXHBrbmV3XFxcXHBhY2thZ2VzXFxcXGNoYWluc1xcXFx0c3VwLmNvbmZpZy50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJEOlxcXFxXT1JLXFxcXFdlYlNlcnZlcnNcXFxcaG9tZVxcXFxsb2NhbGhvc3RcXFxcd3d3XFxcXG1haW5cXFxccGtuZXdcXFxccGFja2FnZXNcXFxcY2hhaW5zXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi9XT1JLL1dlYlNlcnZlcnMvaG9tZS9sb2NhbGhvc3Qvd3d3L21haW4vcGtuZXcvcGFja2FnZXMvY2hhaW5zL3RzdXAuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndHN1cCdcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKG9wdGlvbnMpID0+ICh7XG4gIGVudHJ5OiB7XG4gICAgaW5kZXg6ICcuL3NyYy9pbmRleC50cycsXG4gIH0sXG4gIGZvcm1hdDogWydlc20nLCAnY2pzJ10sXG4gIGR0czogZmFsc2UsXG4gIGNsZWFuOiAhb3B0aW9ucy53YXRjaCxcbiAgdHJlZXNoYWtlOiB0cnVlLFxuICBzcGxpdHRpbmc6IHRydWUsXG4gIG9uU3VjY2VzczogYXN5bmMgKCkgPT4ge1xuICAgIGV4ZWMoJ3RzYyAtLWVtaXREZWNsYXJhdGlvbk9ubHkgLS1kZWNsYXJhdGlvbicsIChlcnIsIHN0ZG91dCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKHN0ZG91dClcbiAgICAgICAgaWYgKCFvcHRpb25zLndhdGNoKSB7XG4gICAgICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxufSkpXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtXLFNBQVMsb0JBQW9CO0FBQy9YLFNBQVMsWUFBWTtBQUVyQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxhQUFhO0FBQUEsRUFDeEMsT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFFBQVEsQ0FBQyxPQUFPLEtBQUs7QUFBQSxFQUNyQixLQUFLO0FBQUEsRUFDTCxPQUFPLENBQUMsUUFBUTtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVcsWUFBWTtBQUNyQixTQUFLLDJDQUEyQyxDQUFDLEtBQUssV0FBVztBQUMvRCxVQUFJLEtBQUs7QUFDUCxnQkFBUSxNQUFNLE1BQU07QUFDcEIsWUFBSSxDQUFDLFFBQVEsT0FBTztBQUNsQixrQkFBUSxLQUFLLENBQUM7QUFBQSxRQUNoQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
