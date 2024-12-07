import { Button } from "../button";

type MenuProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const Menu = ({ title, children, className }: MenuProps) => {
  return (
    <section className="py-10 w-full flex justify-center">
      <div
        className={` w-11/12  md:w-9/12  xl:w-5/12 h-10 shadow-menu rounded-md  py-6 flex justify-between items-center  bg-white ${className}`}
      >
        {children}

        <div className="w-4/12 flex justify-end pr-2 ">
          <Button
            className="bg-gradient-to-r from-color-primary to-color-secondary text-white"
            title={title}
          />
        </div>
      </div>
    </section>
  );
};
