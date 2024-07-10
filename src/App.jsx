import MusicBoard from "./components/MusicBoard";

export default function App() {
  return (
    <>
      <main 
        className=" bg-gray-500 h-screen w-screen flex justify-center items-center overflow-auto bg-cover bg-center">
        <MusicBoard />
      </main>
    </>
  )
}
