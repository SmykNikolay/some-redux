import { ROUTER_PATHS } from "@/shared/constants";
import { Button } from "@/shared/components/ui/button";

export function HomePage() {
  return (
    <>
      <h1>{ROUTER_PATHS.HOME}</h1>
      <div>
        <Button>Click me</Button>
      </div>
    </>
  );
}
