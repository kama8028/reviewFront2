import { useState } from 'react'

const Save = (params, e) => {
  let reviewDescription1 = document.getElementById("reviewDescription").value

  console.log(params)
  console.log(params.satisfaction1.satisfaction)

  return (
    console.log(params.orderItemId+reviewDescription1+params.satisfaction1.satisfaction)

  )
}


const Review = () => {
  let product = "친환경노트";
  const [satisfaction, setSatisfaction] = useState("GOOD");

  const params = {
    memberId : "1",
    orderItemId : "1",
    product : "친환경노트",
    satisfaction1 : {satisfaction}
  };

  const radioClick = (params) => {
    console.log(params)
    setSatisfaction(params)
    console.log(satisfaction)
  }

  return (
    <>
      <div style={{width:"800px",height:"1000px"}}>
      <br></br>
      <h5><strong>상품 리뷰 작성</strong></h5>
      <br></br>
      <div class="form-floating">
        <input class="form-control" type="text"></input>
        <label class="form-control" id="product"><h5><strong>상품명 : {product}</strong></h5></label>
      </div>
      <br></br>
      <div>
        <strong>상품만족도</strong>&nbsp;&nbsp;
        <label><input class="form-check-input" type="radio" name="satisfaction" id="satisfaction" value="GOOD" onClick={() => radioClick("GOOD")}/>&nbsp;좋음&nbsp;</label>
        <label><input class="form-check-input" type="radio" name="satisfaction" id="satisfaction" value="NORMAL" onClick={() => radioClick("NORMAL")}/>&nbsp;보통&nbsp;</label>
        <label><input class="form-check-input" type="radio" name="satisfaction" id="satisfaction" value="BAD" onClick={() => radioClick("BAD")}/>&nbsp;나쁨&nbsp;</label>
      </div>
      <br></br>
      <strong>리뷰 작성란</strong>&nbsp;&nbsp;
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="reviewDescription"></textarea>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary me-md-2" type="button" onClick={() => Save(params)}>저장</button>
      </div>
      </div>
    </>
  );
};

export default Review;
