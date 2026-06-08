export default function LokalStorage({Daftar}){
    localStorage.setItem("Daftar", JSON.stringify(Daftar));
}