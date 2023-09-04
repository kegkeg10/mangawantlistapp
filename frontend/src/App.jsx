import { Routes, Route } from "react-router-dom"
import CreateMangas from "./pages/CreateMangas"
import ShowManga from "./pages/ShowManga"
import EditManga from "./pages/EditManga"
import DeleteManga from "./pages/DeleteManga"
import Home from "./pages/Home"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mangas/create" element={<CreateMangas />} />
      <Route path="/mangas/details/:id" element={<ShowManga />} />
      <Route path="/mangas/edit/:id" element={<EditManga />} />
      <Route path="/mangas/delete/:id" element={<DeleteManga />} />
    </Routes>
  )
}

export default App
