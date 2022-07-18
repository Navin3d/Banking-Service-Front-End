import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import CustDetailPage from "../pages/CustDetailPage"
import Inddetailpage from "../pages/Inddetailpage";
import Transferpage from "../pages/Transferpage";
import Transcustdetail from "../pages/Transcustdetail";
import TransferTo from "../pages/TransferTo";


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/detail" element={<CustDetailPage/>} />
    <Route path="/detailind/:id" element={<Inddetailpage/>} />
    <Route path="/transferdetail" element={<Transferpage/>} />
    <Route path="/transferind/:id" element={<Transcustdetail/>} />
    <Route path="/transfer/:id" element={<TransferTo/>} />

    </Routes>
    </div>
    </BrowserRouter>
);
export default AppRouter;