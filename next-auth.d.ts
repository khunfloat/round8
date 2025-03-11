declare module "next-auth" {
  interface Sesstion {
    id: string;
  }
  interface JWT {
    id: string;
  }
}
