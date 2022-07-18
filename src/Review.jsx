import { useState } from 'react'

const Review = () => {
  let product = "친환경노트";
  function handleChange(e) {

  }
  return (
    <>
      <div style={{width:"800px",height:"1000px"}}>
      <br></br>
      <h5><strong>상품 리뷰 작성</strong></h5>
      <br></br>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea1"></textarea>
        <label for="floatingTextarea1">상품명 : {product}</label>
      </div>
      <br></br>
      <div>
        <strong>상품만족도</strong>&nbsp;&nbsp;
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
        &nbsp;좋음&nbsp;
        </label>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
        <label class="form-check-label" for="flexRadioDefault2">
        &nbsp;보통&nbsp;
        </label>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
        <label class="form-check-label" for="flexRadioDefault3">
        &nbsp;나쁨&nbsp;
        </label>
      </div>
      <br></br>
      <strong>리뷰 작성란</strong>&nbsp;&nbsp;
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        < button class="btn btn-primary me-md-2" type="button"> 저장 </button>
      </div>
      </div>
    </>
  );
};

export default Review;
