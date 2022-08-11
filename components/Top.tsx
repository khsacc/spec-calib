import { NextPage } from "next";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Top: NextPage = () => (
  <>
    <h1 className="text-cyan-700 text-2xl font-bold">
      Spectrometer calibrator
    </h1>
    <p>
      標準試料のピークをフィッティングすることでより正確に分光機を較正できます。
      <br />
      Bug report and/or feature requests: contact Hiroki Kobayashi
      (hiroki@eqchem.s.u-tokyo.ac.jp)
    </p>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
      >
        How it works / 計算の手順
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <ol className="list-decimal pl-4">
            <li>
              まず、標準試料のピークを1本ずつガウス函数でフィットします（Pseudo
              Voigtなどを使った方がよく合いますが、計算を単純にするため今回はそこまでこだわっていません）。このとき、ピーク位置はピクセルで算出します。すなわち、分光機が吐き出す横軸の何かしらの値は一切使用しません。
            </li>
            <li>
              次に、標準試料の文献値を用いて、ピクセルと真の値の関係式を作ります。（このアプリケーション内では、横軸の値は単なる数値として扱われ、単位は考慮されません。したがって、ラマンシフトにも波長にも使えます）
            </li>
            <li>
              上記の値を分光機の制御ソフトウェア上のキャリブレーションの機能に入れれば良いのですが、私の使っている分光機では、キャリブレーション時のピクセル値として整数値しか許容されません。したがって、先に決めた「ピクセルと真の値の関係式」から、ピーク位置に最も近い整数値のピクセルと、そのピクセルにおける真の値を計算します。
              <br />
              このとき、「ピーク中心と文献値を使ってn次函数でフィッティングしたキャリブレーション結果」と「ピーク中心に最も近い整数値のピクセルと、そのピクセルに対して推定される真の値を用いてn次函数でフィッティングしたキャリブレーション結果」には、n=1の場合を除けば、わずかな違いが生じます。しかし、極めて小さい差であると思われるので、その差については気にしないという立場をとっています。
            </li>
          </ol>
        </div>
      </AccordionDetails>
    </Accordion>
  </>
);
