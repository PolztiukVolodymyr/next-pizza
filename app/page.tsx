// import { Suspense } from "react";
import Container from "@/components/shared/container";
import Filters from "@/components/shared/filters";
import ProductsGroupList from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import TopBar from "@/components/shared/top-bar";
import { appetizerItems, drinkItems, pizzaItems } from "@/data/productItems";

export default function Home() {
    return (
        <>
            <Container className='mt-10'>
                <Title text='Усі піцци' size='lg' className='font-extrabold ' />
            </Container>
            <TopBar />
            <Container className='pb-14 mt-10'>
                <div className='flex gap-[60px]'>
                    {/* Фільтрація */}

                    <div className='w-[250px]'>
                        {/* <Suspense> */}
                        <Filters />
                        {/* </Suspense> */}
                    </div>
                    {/* Список товарів */}
                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            <ProductsGroupList
                                title='Піцци'
                                categoryId={1}
                                items={pizzaItems}
                            />

                            <ProductsGroupList
                                title='Кава'
                                categoryId={2}
                                items={drinkItems}
                            />
                            <ProductsGroupList
                                title='Закуски'
                                categoryId={3}
                                items={appetizerItems}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

//  return (
//      <>
//          <Container className='mt-10'>
//              <Title text='Все пиццы' size='lg' className='font-extrabold' />
//          </Container>

//          <TopBar
//              categories={categories.filter(
//                  (category) => category.products.length > 0
//              )}
//          />

//          <Stories />

//          <Container className='mt-10 pb-14'>
//              <div className='flex gap-[80px]'>
//                  {/* Фильтрация */}
//                  <div className='w-[250px]'>
//                      <Suspense>
//                          <Filters />
//                      </Suspense>
//                  </div>

//                  {/* Список товаров */}
//                  <div className='flex-1'>
//                      <div className='flex flex-col gap-16'>
//                          {categories.map(
//                              (category) =>
//                                  category.products.length > 0 && (
//                                      <ProductsGroupList
//                                          key={category.id}
//                                          title={category.name}
//                                          categoryId={category.id}
//                                          items={category.products}
//                                      />
//                                  )
//                          )}
//                      </div>
//                  </div>
//              </div>
//          </Container>
//      </>
//  );
