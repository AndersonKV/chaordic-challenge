import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Container } from "../styles/index";
import { IData, Items } from "../types/index";
import dataJson from "../assets/order.json";

interface Props extends RouteComponentProps<any> {
  history: any;
}

const App: React.FC<Props> = ({ history }) => {
  const [data, setData] = useState<IData>();
  const [showComponentF1, setShowComponentF1] = useState(false);
  const [showComponentF2, setShowComponentF2] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function init() {
      console.log("iniciando");
      const q = dataJson as any;
      console.log(q);
      setData(q);
      setLoading(true);
    }
    init();
  }, []);

  function handleErrorImage(
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) {
    let image = event.target as HTMLImageElement;
    let error =
      "https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/4501/error-image-generic.png";
    image.src = error;
  }

  const currenthDayMonth = (month: string) => {
    switch (month) {
      case "01":
        return "Janeiro";
      case "02":
        return "Fevereiro";
      case "03":
        return "Março";
      case "04":
        return "Abril";
      case "05":
        return "Maio";
      case "06":
        return "Junho";
      case "07":
        return "Julho";
      case "08":
        return "Agosto";
      case "09":
        return "Setembro";
      case "10":
        return "Outubro";
      case "11":
        return "Novembro";
      case "12":
        return "Dezembro";
      default:
        return "Ocorreu um erro";
    }
  };

  const formatedDataOrder = () => {
    const splitData = data?.fulfillments.F1.createdAt
      .replace("T", " ")
      .split(" ");

    if (!splitData) {
      return;
    }

    const getData = splitData[0].split("-");
    const currentHour = splitData[1].split(".")[0];

    console.log(currentHour);
    return `${getData[2]} de ${currenthDayMonth(getData[1])} de ${
      getData[0]
    }, as ${currentHour}`;
  };

  const ComponentHeader = () => {
    return (
      <div>
        <div className="display-flex  padding-title">
          <span className="pt-0-5 m-10px    bold">Tratamento de entregas</span>
        </div>
        <div className=" display-flex pt-0-5 mb-10 border-top-gray border-bottom-gray ">
          <div className=" padding-left display-flex flex-direction-column align-items-start">
            <span className="  text-gray pt-0-5">Pedido</span>
            <span className="  pt-0-5">{data?.id}</span>
          </div>
          <div className="padding-left display-flex flex-direction-column align-items-flex-start">
            <span className=" text-gray  pt-0-5">Status do pedido</span>
            <div className=" display-flex align-items-center">
              <button className="circle-orange"></button>
              <span className=" pt-0-5">
                {data?.status === "PENDING"
                  ? "Pendente"
                  : "Falha ao buscar informação"}
              </span>
            </div>
          </div>
          <div className="  display-flex flex-direction-column justify-content-center">
            <span className="text-gray pt-0-5 ">Entrega selecionada</span>
            <div className=" pt-0-5 ">
              <button className="btn-small-grey">F1</button>
              <button className="btn-between-margin  btn-small-grey">F2</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ComponentDateClient = () => {
    return (
      <div className="border-gray m-10px  display-flex flex-direction-column  flex-3">
        <div>
          <span className="bold pt-0-5">Dados do Cliente</span>
        </div>
        <div className="display-flex flex-direction-column ">
          <span className="pt-0-5">{data?.customer.name}</span>
          <span className="text-gray pt-0-5">56165165156156</span>
        </div>
        <div className="mt-1  display-flex flex-direction-column ">
          <span className="pt-0-5">{data?.customer.name}</span>
          <span className="text-gray pt-0-5">
            {data?.customer.telephone.number}
          </span>
        </div>
        <div className="mt-1  display-flex flex-direction-column ">
          <span className="text-gray pt-0-5">Endereço da Cobrança</span>
          <div>
            <span className="pt-0-5">{data?.billingAddress.address1} -</span>
            <span className="pt-0-5">{data?.billingAddress.state} -</span>
            <span className="pt-0-5">{data?.billingAddress.zip}</span>
          </div>
        </div>
        <div className="mt-1 display-flex flex-direction-column justify-content-space">
          <span className="text-gray pt-0-5">Endereço da Entrega</span>
          <div>
            <span className="pt-0-5">{data?.billingAddress.address1} -</span>
            <span className="pt-0-5">{data?.billingAddress.state} -</span>
            <span className="pt-0-5">{data?.billingAddress.zip}</span>
          </div>
        </div>
      </div>
    );
  };

  const ComponentDatePayment = () => {
    return (
      <div className="border-gray m-10px  display-flex flex-direction-column  flex-2">
        <div className="display-flex p pt-0-5">
          <span className="bold">Dados do pagamento</span>
        </div>
        <div className="display-flex p pt-0-5">
          <span>Subtotal</span>
          <span>R${data?.payments[0].amount}</span>
        </div>
        <div className="display-flex p pt-0-5">
          <span>Frete</span>
          <span>R${data?.payments[0].amount}</span>
        </div>
        <div className="display-flex p pt-0-5">
          <span>Desconto</span>
          <span className="text-orange">- R${data?.totals.discount}</span>
        </div>
        <div className="display-flex p pt-0-5">
          <span>Valor total</span>
          <span className="text-gray">R${data?.totals.total}</span>
        </div>
        <hr />
        <div className=" pt-0-5 display-flex p flex-direction-column  ">
          <span className="text-gray">Método de pagamento</span>
          <div className=" display-flex flex-direction-row justify-content-space-between ">
            <div>
              <span>{data?.payments[0].amount}</span>
              <span>{data?.payments[0].number}</span>
              <span>{data?.payments[0].expiresAt}</span>
            </div>
            <span>1x de R${data?.totals.total}</span>
          </div>
        </div>
      </div>
    );
  };

  const ComponentDateOrder = () => {
    return (
      <div className=" pt-0-5 border-top-gray border-bottom-gray  ">
        <div className="pt-0-5 ">
          <span className=" pt-0-5 bold">Dados do pedido</span>
        </div>
        <div className=" pt-0-5 display-flex flex-direction-row  ">
          <div className="padding-left pt-0-5 display-flex flex-direction-column  ">
            <span className="text-gray">Comprado em</span>
            <span className="font-size-0-7em ">{formatedDataOrder()}</span>
          </div>
          <div className="padding-left pt-0-5 display-flex flex-direction-column  ">
            <span className="text-gray">Pontos de Venda</span>
            <span className="font-size-0-7em ">{data?.pointOfSale}</span>
          </div>
          <div className="padding-left pt-0-5 display-flex flex-direction-column  ">
            <span className="text-gray">Modalidade de Entrega</span>
            <span className="  font-size-0-7em ">
              F1 Envio pela loja, F2 Retirar da loja
            </span>
          </div>
        </div>
      </div>
    );
  };

  const ComponentF1 = () => {
    return (
      <div className="display-flex border-gray mt-20">
        <div className="  display-flex flex-direction-column align-items-flex-center justify-content-center">
          <span className="btn-arrow">
            <i className="fas fa-angle-up"></i>
          </span>
        </div>
        <div className="padding-left    display-flex flex-direction-column align-items-flex-center justify-content-center">
          <span className="  pt-0-5 text-gray ">Entrega F1</span>
          <span className="  pt-0-5">{data?.id}</span>
        </div>

        <div className="padding-left display-flex flex-direction-column align-items-flex-start justify-content-center">
          <span className="   text-gray  pt-0-5">Status da entrega</span>
          <div className="   display-flex align-items-center">
            <button className="circle-gray"></button>
            <span className=" pt-0-5">
              {data?.fulfillments.F1.status === "DELIVERED"
                ? "Entregue"
                : "Falha ao buscar"}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const ComponentF2 = () => {
    return (
      <>
        <div className="display-flex border-gray mt-20 ">
          <div className="  display-flex flex-direction-column align-items-flex-center justify-content-center">
            <span
              className={`btn-arrow`}
              onClick={() => setShowComponentF2(!showComponentF2)}
            >
              {showComponentF2 === true ? (
                <i className="fas fa-angle-down"></i>
              ) : (
                <i className="fas fa-angle-up"></i>
              )}
            </span>
          </div>
          <div className="padding-left    display-flex flex-direction-column align-items-flex-center justify-content-center">
            <span className="  pt-0-5 text-gray ">Entrega F2</span>
            <span className="  pt-0-5">{data?.id}</span>
          </div>

          <div className="padding-left display-flex flex-direction-column align-items-flex-start justify-content-center">
            <span className="   text-gray  pt-0-5">Status da entrega</span>
            <div className="   display-flex align-items-center">
              <button className="circle-green"></button>
              <span className=" pt-0-5">
                {data?.fulfillments.F1.status === "PENDING"
                  ? "Separação"
                  : "Falha ao buscar"}
              </span>
            </div>
          </div>
        </div>

        <div className=" border-gray display-flex border-gray mt-20 ">
          {showComponentF2 === true ? (
            <div className="show-component flex-1">
              <div
                className="
                display-flex 
                flex-direction-row 
                justify-content-space-between 
                flex-1"
              >
                <div className=" flex-2 align-items-flex-start">
                  <div className="bg  ">
                    <span>PRODUTO</span>
                  </div>
                  <div className="display-flex align-items-flex-start ">
                    <div className=" mr-1  display-flex align-items-flex-start mt-1  mb-1">
                      <img
                        src={data?.fulfillments.F1.items.AR384675.image}
                        alt="product"
                        onErrorCapture={handleErrorImage}
                      />
                    </div>
                    <div className=" mt-1  mb-1  display-flex der-gray flex-direction-column ">
                      <span>{data?.fulfillments.F1.items.AR384675.name}</span>
                      <span>{data?.fulfillments.F1.items.AR384675.color}</span>
                    </div>
                  </div>
                </div>
                <div className=" flex-1 display-flex flex-direction-column  ">
                  <div className="bg text-center  ">
                    <span>SKU</span>
                  </div>
                  <div className="  text-center mt-1  mb-1 ">
                    <span>{data?.fulfillments.F1.items.AR384675.sku}</span>
                  </div>
                </div>
                <div className=" flex-1">
                  <div className="bg text-center  ">
                    <span>QTD</span>
                  </div>
                  <div className="  text-center mt-1  mb-1 ">
                    <span>{data?.fulfillments.F1.items.AR384675.quantity}</span>
                  </div>
                </div>
                <div className=" flex-1  ">
                  <div className="bg text-center  ">
                    <span>PREÇO</span>
                  </div>
                  <div className=" justify-content-space-between  display-flex mt-1  mb-1 flex-direction-column ">
                    <div
                      className=" 
                     display-flex 
                     flex-direction-row 
                     justify-content-space-between
                       "
                    >
                      <span className="bold ">Subtotal</span>
                      <span className=" ">
                        R${data?.fulfillments.F1.items.AR384675.price}
                      </span>
                    </div>
                    <div
                      className=" 
                     display-flex 
                     flex-direction-row 
                     justify-content-space-between
                       "
                    >
                      <span className="bold ">Frete</span>
                      <span>R$5,00</span>
                    </div>
                    <div
                      className=" 
                     display-flex 
                     flex-direction-row 
                     justify-content-space-between
                       "
                    >
                      <span className="bold ">Valor total</span>
                      <span>R$ 200,00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
                display-flex 
                flex-direction-row 
                justify-content-space-between 
                flex-1"
              >
                <div className=" flex-2 align-items-flex-start">
                  <div className="display-flex align-items-flex-start ">
                    <div className=" mr-1  display-flex align-items-flex-start mt-1  mb-1">
                      <img
                        src={data?.fulfillments.F2.items.TN35568798.image}
                        alt="product"
                        onErrorCapture={handleErrorImage}
                      />
                    </div>
                    <div className=" mt-1  mb-1  display-flex der-gray flex-direction-column ">
                      <span>{data?.fulfillments.F2.items.TN35568798.name}</span>
                      <span>
                        {data?.fulfillments.F2.items.TN35568798.color}
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex-1 display-flex flex-direction-column  ">
                  <div className="  text-center mt-1  mb-1 ">
                    <span>{data?.fulfillments.F2.items.TN35568798.sku}</span>
                  </div>
                </div>
                <div className=" flex-1">
                  <div className="  text-center mt-1  mb-1 ">
                    <span>
                      {data?.fulfillments.F2.items.TN35568798.quantity}
                    </span>
                  </div>
                </div>
                <div className=" flex-1  ">
                  <div className=" justify-content-space-between  display-flex mt-1  mb-1 flex-direction-column ">
                    <div
                      className=" 
                     display-flex 
                     flex-direction-row 
                     justify-content-space-between
                       "
                    >
                      <span className="bold ">Subtotal</span>
                      <span className=" ">
                        R${data?.fulfillments.F2.items.TC587879785.price}
                      </span>
                    </div>
                    <div
                      className=" 
                     display-flex 
                     flex-direction-row 
                     justify-content-space-between
                       "
                    >
                      <span className="bold ">Frete</span>
                      <span>R$5,00</span>
                    </div>
                    <div
                      className=" 
                     display-flex 
                     flex-direction-row 
                     justify-content-space-between
                       "
                    >
                      <span className="bold ">Valor total</span>
                      <span>R$ 200,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </>
    );
  };

  const ComponentView = () => {
    return (
      <main className="border-gray ">
        <ComponentHeader />
        <div className="display-flex  mb-10">
          <ComponentDateClient />
          <ComponentDatePayment />
        </div>

        <ComponentDateOrder />

        <ComponentF1 />
        <ComponentF2 />
      </main>
    );
  };

  return (
    <Container>
      {loading === true ? <ComponentView /> : <span>carregando...</span>}
    </Container>
  );
};

export default App;
