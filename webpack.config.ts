import path from "path";
import * as Analyser from "webpack-bundle-analyzer";

export default {
  entry: path.resolve(__dirname, "src/index.ts"),
  devtool: "source-map",
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "index.[hash].js",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  plugins: [new Analyser.BundleAnalyzerPlugin()],
};
