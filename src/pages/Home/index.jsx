import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { useContext } from "react";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import { ShoppingCartContext } from "../../Context";



function Home() {

    const context = useContext(ShoppingCartContext)
    

    const renderView = ()=>{

      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>We don't have anything...</div>
        )
      }
    }  

    return (
      <Layout>
        <h1 className="font-semibold text-xl py-3">Exclusive Products</h1>
        <input type="text" placeholder="Search a product"
         className="w-80 mb-6 rounded-full border border-black p-4"
        onChange={(event)=>context.setSearchValue(event.target.value)}/>
        <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
           {renderView()}
        </section>

        <ProductDetail />
        <CheckoutSideMenu />
      </Layout>
    )
  }
  
  export {Home}