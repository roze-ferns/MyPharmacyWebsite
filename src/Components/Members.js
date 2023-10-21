import React from 'react'

export default function Members() {
  return (
    <div className="containers">
      <div className="row">
        <div className="col-sm-12">
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">To:</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Subject(Optional)" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        </div>
      </div>
    </div>
  )
}
