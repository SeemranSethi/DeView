import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Documentation.css'

const content = "lorem kjd rjgn rjngosjkdfn knf rjfnsldi ekfmwoie eekfwoijt ekekfnj kefo wkfnowienf cjifjoifnkdmf.lorem kjd rjgn rjngosjkdfn knf rjfnsldi ekfmwoie eekfwoijt ekekfnj kefo wkfnowienf cjifjoifnkdmf. lorem kjd rjgn rjngosjkdfn knf rjfnsldi ekfmwoie eekfwoijt ekekfnj kefo wkfnowienf cjifjoifnkdmf. lorem kjd rjgn rjngosjkdfn knf rjfnsldi ekfmwoie eekfwoijt ekekfnj kefo wkfnowienf cjifjoifnkdmf. lorem kjd rjgn rjngosjkdfn knf rjfnsldi ekfmwoie eekfwoijt ekekfnj kefo wkfnowienf cjifjoifnkdmf.lorem kjd rjgn rjngosjkdfn knf rjfnsldi ekfmwoie eekfwoijt ekekfnj kefo wkfnowienf cjifjoifnkdmf. lorem kjd rjgn rjngosjkdfn knf rjfnsldi ekfmwoie eekfwoijt ekekfnj kefo wkfnowienf cjifjoifnkdmf";

export default function Documentation(){
    // return (
        // <div>
        //     <Navbar title="Documentation"/>
        //     <Sidebar/>
        //     <Container className="mt-4">
        //         <Row>
        //             <Col md={6}>
        //             <div id='left-container' className="p-4 text-white text-center rounded">{content}</div>
        //             </Col>
        //             <Col md={6}>
        //             <div id='right-container' className="p-4 text-white text-center rounded">{content}</div>
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>
    // )
    const [markdown, setMarkdown] = useState('# Hello Markdown!');

  return (
    <div>
     <Navbar title="Documentation"/>
     <Sidebar/>
    <div className="container py-4 doc-container">
      <div className="row">
        <div className="col-md-6 mb-3">
        <h3 className="mb-3 head">Markdown Editor</h3>
          <textarea
            className="form-control markdown-editor"
            rows="10"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Write your markdown here..."
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3 head">Preview</h3>
          <div className="border p-3 bg-light rounded preview-container">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}