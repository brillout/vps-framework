import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";

export default {
  //plugins: [react(), ssr({ pageFiles: { include: ["framework"] } })],
  plugins: [react(), ssr({ pageFiles: { include: ["node_modules/framework/"] } })],
};
