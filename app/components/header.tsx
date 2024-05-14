import Icon from "./icon";
import { Card, CardContent } from "./ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";

const Header = () => {
  return (
    <Card className="h-20 w-full min-w-80 rounded-none border-none bg-foreground">
      <CardContent className="flex h-full w-full flex-row items-center justify-between py-0 sm:px-20 md:px-20 lg:px-40">
        <Drawer>
          <DrawerTrigger>
            <p className="text-white">Romans 11:36</p>
          </DrawerTrigger>

          <DrawerContent className="h-40 min-w-80">
            <DrawerHeader className="flex h-full items-center justify-center">
              <p className="text-center text-lg text-white sm:text-sm md:text-xl">
                36{" "}
                <span className="italic">
                  For from him and through him and for him are all things. To
                  him be the glory forever! Amen.
                </span>
              </p>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        <div className="flex items-center gap-5 sm:gap-10 md:gap-10 lg:gap-10">
          <Icon
            src="/github-icon.svg"
            width={24}
            height={24}
            alt="GitHub"
            href="https://github.com/luizredig"
          />

          <Icon
            src="/instagram-icon.svg"
            width={24}
            height={24}
            alt="Instagram"
            href="https://instagram.com/luizredig"
          />

          <Icon
            src="/linkedin-icon.svg"
            width={24}
            height={24}
            alt="LinkedIn"
            href="https://br.linkedin.com/in/luiz-redig-072936234"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
