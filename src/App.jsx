import "./App.css";

import { SiArxiv } from "react-icons/si";
import { FaGithub, FaCity } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

const Text_Citation = `Xijie Yang, Mulin Yu, Changjian Jiang, Kerui Ren, Tao Lu, Jiangmiao Pang, Dahua Lin, Bo Dai, and Linning Xu. 2026. EAG-PT: Emission-Aware Gaussians and Path Tracing for Diffuse Indoor Scene Reconstruction and Editing. In Special Interest Group on Computer Graphics and Interactive Techniques Conference Conference Papers (SIGGRAPH Conference Papers ’26), July 19–23, 2026, Los Angeles, CA, USA. ACM, New York, NY, USA, 12 pages. https://doi.org/10.1145/3799902.3811054`;

const BibTeX_Citation = `@article{XijieYang2026EAG-PT,
  title={EAG-PT: Emission-Aware Gaussians and Path Tracing for Indoor Scene Reconstruction and Editing},
  author={Yang, Xijie and Yu, Mulin and Jiang, Changjian and Ren, Kerui and Lu, Tao and Pang, Jiangmiao and Lin, Dahua and Dai, Bo and Xu, Linning},
  journal={arXiv preprint arXiv:2601.23065},
  year={2026}
}`;

function App() {
  return (
    <>
      <h1>
        EAG-PT: Emission-Aware Gaussians and Path Tracing <br />
      </h1>
      <h2>for Diffuse Indoor Scene Reconstruction and Editing</h2>
      <h3>(SIGGRAPH 2026 Conference Paper)</h3>

      <p>
        <a href="https://xijie-yang.github.io" title="杨希杰">
          Xijie Yang
        </a>
        <sup>1,2</sup>{" "}
        <a href="https://mulinyu.github.io/" title="于沐霖">
          Mulin Yu
        </a>
        <sup>2*</sup>{" "}
        <a
          href="https://scholar.google.com/citations?user=V4miywEAAAAJ"
          title="蒋昌健"
        >
          Changjian Jiang
        </a>
        <sup>1</sup>{" "}
        <a href="https://cskrren.github.io/" title="任柯睿">
          Kerui Ren
        </a>
        <sup>3,2</sup>{" "}
        <a href="https://inspirelt.github.io/" title="鲁涛">
          Tao Lu
        </a>
        <sup>2</sup>{" "}
        <a href="https://oceanpang.github.io/" title="庞江淼">
          Jiangmiao Pang
        </a>
        <sup>2</sup>{" "}
        <a href="https://www.ie.cuhk.edu.hk/faculty/lin-dahua/" title="林达华">
          Dahua Lin
        </a>
        <sup>4,2</sup>{" "}
        <a href="https://datascience.hku.hk/people/bo-dai/" title="戴勃">
          Bo Dai
        </a>
        <sup>5,6*</sup>{" "}
        <a href="https://eveneveno.github.io/lnxu/" title="徐霖宁">
          Linning Xu
        </a>
        <sup>4,2</sup>
      </p>

      <p>
        <sup>1</sup> Zhejiang University <sup>2</sup> Shanghai Artificial
        Intelligence Laboratory <sup>*</sup> Corresponding authors.
        <br />
        <sup>3</sup> Shanghai Jiao Tong University <sup>4</sup> The Chinese
        University of Hong Kong <sup>5</sup> The University of Hong Kong{" "}
        <sup>6</sup> Feeling AI
      </p>

      <p>
        <a
          href="https://arxiv.org/abs/2601.23065"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiArxiv /> Paper <small>(arXiv)</small>
        </a>{" "}
        {/* <a
          href="https://doi.org/10.1145/3799902.3811054"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLibrary /> Paper <small>(publisher)</small>
        </a>{" "} */}
        <a
          href="https://github.com/InternRobotics/EAG-PT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> Code
        </a>
      </p>

      <h2>Text Citation</h2>
      <p>
        <code>{Text_Citation}</code>
      </p>

      <h2>BibTeX Citation</h2>
      <p>
        <code
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {BibTeX_Citation}
        </code>
      </p>

      <a
        href="https://city-super.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCity /> CitySuper Projects
      </a>
    </>
  );
}

export default App;
