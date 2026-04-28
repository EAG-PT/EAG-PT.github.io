import "./App.css";

import { SiArxiv } from "react-icons/si";
import { FaGithub, FaCity } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";

import Figure_Teaser from "./figures/Teaser.jpg";
import Figure_Method_pipeline from "./figures/Method-pipeline.jpg";
import Figure_Result_synthetic_lightball_relighting from "./figures/Result-synthetic-lightball-relighting.jpg";
import Figure_Result_real_eyefultower_editing from "./figures/Result-real-eyefultower-editing.jpg";
import Figure_Result_real_lectureroom_relighting from "./figures/Result-real-lectureroom-relighting.jpg";
import Figure_Result_real_comparison_with_fipt from "./figures/Result-real-comparison-with-fipt.jpg";

import Video_F from "./videos/F.mp4";
import Video_E from "./videos/E.mp4";
import Video_FIPT from "./videos/FIPT.mp4";

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
      <h1>EAG-PT: Emission-Aware Gaussians and Path Tracing</h1>
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
      <p>
        EAG-PT reconstructs indoor scenes with <b>2D Gaussians</b> for{" "}
        <i>editable diffuse global illumination</i>. By{" "}
        <b>separating emissive and non-emissive components</b> and combining
        efficient reconstruction with <b>path tracing</b>, it enables{" "}
        <u>more natural, physically consistent scene editing</u> than
        radiance-field methods, while <u>avoiding the geometry limitations</u>{" "}
        of mesh-based inverse rendering.
      </p>
      <p>
        <video
          src={Video_F}
          controls
          autoPlay
          loop
          style={{
            maxWidth: "60%",
          }}
        />
      </p>
      <p>
        <img
          src={Figure_Teaser}
          alt="Teaser"
          style={{
            maxWidth: "100%",
          }}
        />
      </p>
      <p>
        <details>
          <summary>Paper Abstract</summary>
          <p>
            Recent radiance-field-based reconstruction methods, such as NeRF and
            3DGS, achieve high visual fidelity for indoor scenes, but often
            break down under scene editing due to baked illumination and the
            lack of explicit light transport. In contrast, inverse path tracing
            methods based on mesh representations enforce correct light
            transport but require highly accurate geometry, making them
            difficult to apply robustly to real indoor scenes. We present{" "}
            <i>Emission-Aware Gaussians and Path Tracing (EAG-PT)</i>, a method
            for <i>physically based reconstruction and rendering</i> of indoor
            scenes using a unified 2D Gaussian representation,{" "}
            <i>targeting editable diffuse global illumination</i>. Our approach
            consists of three key ideas: (1) representing indoor scenes with{" "}
            <b>2D Gaussians as a transport-friendly geometric proxy</b> that
            avoids explicit mesh reconstruction; (2) explicitly{" "}
            <b>separating emissive and non-emissive components</b> during
            reconstruction to support editing; and (3) decoupling reconstruction
            from final rendering by using{" "}
            <b>
              efficient single-bounce optimization and high-quality multi-bounce
              path tracing
            </b>
            , respectively. Experiments on synthetic and real indoor scenes show
            that EAG-PT produces{" "}
            <u>more natural and physically consistent edited renderings</u> than
            radiance-field reconstructions, while{" "}
            <u>
              preserving finer geometric detail and avoiding mesh-induced
              artifacts
            </u>{" "}
            compared with mesh-based inverse path tracing. These results
            highlight the potential of our approach for applications such as
            interior design, XR content creation, and embodied AI.
          </p>
        </details>
      </p>
      <h2>Pipeline</h2>
      <p>
        <img
          src={Figure_Method_pipeline}
          alt="Method-pipeline"
          style={{
            maxWidth: "100%",
          }}
        />
      </p>
      <p>
        Given multi-view linear captures of an indoor scene with corresponding
        emitter masks and estimated normals, the <i>radiant scene</i> is first
        reconstructed in <b>Stage 0</b> to get radiance, separate emitters, and
        derive geometry, based on <b>2D Gaussians and ray tracing</b>. The{" "}
        <i>diffuse material of the non-emitters</i> is then recovered in{" "}
        <b>Stage 1</b> through{" "}
        <b>light bouncing and differentiable rendering</b>. With properties of
        emitters, non-emitters, and scene geometry,{" "}
        <b>path tracing that bounces light around the scene</b> is adopted for{" "}
        <u>photo-realistic renders on various scene editing scenarios</u>.
      </p>
      <h2>Results</h2>
      <p>
        EAG-PT derives{" "}
        <u>
          much more natural renders in reconstructed indoor scenes after editing
        </u>
        , and even <u>better visual quality than mesh-based baseline</u>, which
        is potential for practical and realistic real-to-sim reconstruction.
      </p>
      <h3>Relighting Results Compared with Ground Truths</h3>
      <p>
        <img
          src={Figure_Result_synthetic_lightball_relighting}
          alt="Result-synthetic-lightball-relighting"
          style={{
            maxWidth: "100%",
          }}
        />
      </p>
      <p>
        <img
          src={Figure_Result_real_lectureroom_relighting}
          alt="Result-real-lectureroom-relighting"
          style={{
            maxWidth: "100%",
          }}
        />
      </p>
      <h3>Scene Editing on Eyeful Tower Scenes</h3>
      <p>
        <video
          src={Video_E}
          controls
          autoPlay
          loop
          style={{
            maxWidth: "60%",
          }}
        />
      </p>
      <p>
        {" "}
        <img
          src={Figure_Result_real_eyefultower_editing}
          alt="Result-real-eyefultower-editing"
          style={{
            maxWidth: "100%",
          }}
        />
      </p>
      <h3>Comparison with Mesh-based FIPT</h3>
      <p>
        <video
          src={Video_FIPT}
          controls
          autoPlay
          loop
          style={{
            maxWidth: "60%",
          }}
        />
      </p>
      <p>
        <img
          src={Figure_Result_real_comparison_with_fipt}
          alt="Result-real-comparison-with-fipt"
          style={{
            maxWidth: "100%",
          }}
        />
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
        href="https://github.com/InternRobotics"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiRobot2Fill /> InternRobotics Projects
      </a>{" "}
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
