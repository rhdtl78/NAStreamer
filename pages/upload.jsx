import 'bootstrap/dist/css/bootstrap.min.css'
const upload = () => {
  return (
    <div>
      <form method="post" enctype="multipart/form-data" action="/upload">
        <input type="file" />
        <input type="submit" />
      </form>
    </div>
  )
}
export default upload
