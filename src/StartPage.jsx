import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Review from './Review';

const ReviewButton = (e) => {
  const params = {
    orderId: document.getElementById('order1').value,
    item: document.getElementById('item').value,
  };
  console.log("한용선");
  console.log(params);
  return (
    window.location.href = "/review"
  )
}

function StartPage() {
  return (
    <>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">주문일자</th>
          <th scope="col">상품명</th>
          <th scope="col">주문상태</th>
        </tr>
      </thead>
      <tbody>
        <tr id="order1" value="1">
          <th id="date">2022-05-13</th>
          <td id="item" value="친환경노트">친환경노트</td>
          <td id="deliveryState">배송완료<br></br><button onClick={ReviewButton}>리뷰등록</button></td>
        </tr>
        <tr id="order2" value="2">
          <th>2022-06-02</th>
          <td>폐타이어가방</td>
          <td>배송완료<br></br><button  onClick={ReviewButton}>리뷰등록</button></td>
        </tr>
        <tr id="order3" value="3">
          <th >2022-06-17</th>
          <td >친환경비닐봉투</td>
          <td>배송완료<br></br><button onClick={ReviewButton}>리뷰등록</button></td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default StartPage
