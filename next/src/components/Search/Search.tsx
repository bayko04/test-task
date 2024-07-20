import { useAppDispatch } from "@/hooks/useAppDispatch";
import { searchProducts } from "@/store/reducers/ProductsSlice";
import { FC } from "react";
import { useForm } from "react-hook-form";

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    const str = data.search;
    console.log(str);
    dispatch(searchProducts(str));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("search")}
        className="bg-[#1118271F] w-[240px] h-[30px] rounded-[6px] pl-[6px]"
        placeholder="Поиск"
        type="text"
      />
    </form>
  );
};

export default Search;
