import React, { useState } from 'react'
import Card from './components/card/Card.jsx'
import './App.css'

function App() {
  // const title = "MSI Anakart";
  // const info = "16 GB 3600Mhz";
  // const image = "https://picsum.photos/id/0/5000/3744";
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "MSI Anakart",
      image: "https://picsum.photos/id/0/5000/3333",
      info: "3.0 GHZ 3*USB 2.0",
      adet: 1,
    }, {
      id: 2,
      title: "RAM",
      image: "https://picsum.photos/id/1/5000/3333",
      info: "16 GB Kingston",
      adet: 1,
    }, {
      id: 3,
      title: "Ekran Kartı",
      image: "https://picsum.photos/id/2/5000/3333",
      info: "Nvdia Ge Force 1050",
      adet: 1,
    }, {
      id: 4,
      title: "Monitör",
      image: "https://picsum.photos/id/3/5000/3744",
      info: '17" Monitör',
      adet: 1,
    }, {
      id: 5,
      title: "Tablet",
      image: "https://picsum.photos/id/4/5000/3333",
      info: "Ipad",
      adet: 1,
    }, {
      id: 6,
      title: "PocketPc",
      image: "https://picsum.photos/id/5/5000/3333",
      info: "Intel Pentium 8",
      adet: 1,
    }, {
      id: 7,
      title: "Macintosh",
      image: "https://picsum.photos/id/6/5000/3333",
      info: "45*2 Ekran Kartlı",
      adet: 1,
    }, {
      id: 8,
      title: "Deri Laptop Çantası",
      image: "https://picsum.photos/id/7/5000/3333",
      info: "Aka Deri",
      adet: 1,
    }




  ]);
  const [basket, setBasket] = useState([]);
  return (
    <div className="App">
      {/* 🍀 This Component App.jsx */}
      {/* <Card titleProp={title} infoProp={info} imageProp={image} /> */}
      <h1>React Sepet Uygulaması</h1>
      <h2>Listelenen Ürünler</h2>
      <div className='urunler'>
        {
          product.map((eleman, index) => {
            return (
              <Card
                onClick={() => {
                  const arr = [...basket];
                  if (arr.findIndex((ind) => {
                    return eleman.id === ind.id;
                  }) === -1) {
                    arr.push(eleman);
                    setBasket(arr);
                  } else {
                    arr.map((item) => {
                      if (item.id === eleman.id) {
                        return (eleman.adet += 1);
                      }
                      setBasket(arr);
                    });
                  }

                  console.log("yazdır", basket)
                }}
                key={index}
                titleProp={eleman.title}
                infoProp={eleman.info}
                imageProp={eleman.image} />
            );

          })}
      </div>
      <div className="sepet">
        <h2>SEPETİMİZ</h2>
        <ul className='sepet'>
          {
            basket.map((eleman, index) => {
              return <li>
                {eleman.title + " ---> " + eleman.info + " ürününden     "}
                <b style={{ fontSize: "24px", color: "red" }}>{eleman.adet}</b> {" Adet Seçildi."}
              </li>
            })
          }

        </ul>
        {
          basket.length > 0 ? <button onClick={() => {
            setBasket([])
          }}> Sepeti Temizle</button> : <h2>Sepetinizde Ürün Bulunmamaktadır.</h2>
        }
      </div>
    </div>
  )
}

export default App
