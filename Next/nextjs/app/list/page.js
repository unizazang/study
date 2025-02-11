export default function List() {

  let 상품 = ['Tomatoes', 'Onion', "Potatoes"]

    return (
      <div  className="bg-slate-700 p-10">
        <h1 className="font-extrabold">리스트 페이지입니다.</h1>
        <h2>상품 목록 </h2>

        {
          상품.map((_, i)=>{
          return (
          <div className="food">
            <h4>{상품[i]}  $40</h4>
          </div>)
          })
        }
        
      </div>
    );
  }
  