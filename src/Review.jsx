import { useState } from 'react'

const Save = (params, e) => {
  let reviewDescription1 = document.getElementById("reviewDescription").value
  let satisfactionType = document.getElementById("satisfaction2").value
  return (
    console.log(params.orderItemId+reviewDescription1+satisfactionType)
  )
}

const Review = () => {
  let product = "친환경노트";

  const params = {
    memberId : "1",
    orderItemId : "1",
    product : "친환경노트"
  };

  function handleChange(e) {

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
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="satisfaction1" value="GOOD"/>
        <label class="form-check-label" for="flexRadioDefault1">
        &nbsp;좋음&nbsp;
        </label>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="satisfaction2" value="NORMAL"/>
        <label class="form-check-label" for="flexRadioDefault2">
        &nbsp;보통&nbsp;
        </label>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="satisfaction3" value="BAD"/>
        <label class="form-check-label" for="flexRadioDefault3">
        &nbsp;나쁨&nbsp;
        </label>
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
