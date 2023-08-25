import { Outlet, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import useAccountInfo from "../../hook/useAccountInfo";
import usePagination from "../../hook/usePagination";
import './Home.css';

const Home = () => {

  const{idCuenta} = useParams();
  const {data,isSuccess,message} = useAccountInfo();
  const {items,nextPage,currentPage,backPage} = usePagination({
    initialData: data,
    itemsPerPage: 6
  });


if(idCuenta) return <Outlet />

  return (
    <>
      <Header/>
      <main>
        <p>Consulta de saldo</p>
        <h1>Selecciona la cuenta a consultar</h1>

        <section className="section">
        {
            currentPage === 2 && <Button  text=" <<< Opciones anteriores " onClick={backPage}/> 
        }
          {
            isSuccess?(
              items.map((item,index) => (<Card accountType={item.tipo_letras} nro={item.n} key={index}/>))
            ):(
              <p>{message}</p>
            )
          }  
          
          {
            currentPage === 1 && <Button  text="Otras opciones >>>" onClick={nextPage}/> 
          }
        </section>

      </main> 
    </>
  )
}

export default Home
