

export default function NewTask() {
    return(
        <>
      <div className="form-control ">
  <label className="label">
    <span className="label-text">Task Title</span>
  </label>
  <label className="input-group">
    <span>Title</span>
    <input type="text" placeholder="Clean up the garage..." className="input input-bordered" />
  </label>
  <div className="divider"></div>
  <textarea placeholder="More descriptions." className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>

  <button className="btn btn-active btn-accent mx-auto px-20 py-15">Button</button>
</div>
        </>
    )
}