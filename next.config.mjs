const nextConfig = {
  // The Code tab reads lesson files on the server, including after a build.
  outputFileTracingIncludes: {
    "/*": ["./src/app/**", "./src/components/ui/**"],
  },
};

export default nextConfig;
