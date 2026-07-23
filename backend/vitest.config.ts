import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    env: {
      ACCESS_TOKEN_SECRET: "test_access_secret",
      REFRESH_TOKEN_SECRET: "test_refresh_secret",
    }
  },
});