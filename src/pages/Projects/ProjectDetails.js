import { useParams } from 'react-router-dom'

// styles
import './ProjectDetails.css'

export default function ProjectDetails() {
    const { id } = useParams()

    return (
        <div>
            <section>
                <div class="container">
                    <h1 class="project-heading">Developer Website</h1>
                    <p class="project-heading secondary">Web design</p>
                </div>
                {/* <img src="./img/edie-main.png" alt="" class="project-main-image" /> */}
            </section>
            <section>
                <div class="container">
                    <div class="project-grid">
                        <div class="project-information">
                            <p class="project-label">Client</p>
                            <p class="project-text">Bryan Weird</p>
                            <p class="project-label">Project type</p>
                            <p class="project-text">Web design</p>
                            <p class="project-label">Project year</p>
                            <p class="project-text">2021</p>
                        </div>
                        <div class="project-description">
                            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis, excepturi nisi architecto fugit autem iusto. Aspernatur dolorum expedita soluta, sit error ratione modi amet itaque dicta veritatis iusto tempora hic debitis commodi exercitationem doloremque aut ipsam explicabo ipsa nobis?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis, excepturi nisi architecto fugit autem iusto. Aspernatur dolorum expedita soluta, sit error ratione modi amet itaque dicta veritatis iusto tempora hic debitis commodi exercitationem doloremque aut ipsam explicabo ipsa nobis?</p>
                            <a class="project-link btn" href="https://edieweb.netlify.app" target="_blank">View project <img src="./icon/arrow-right.svg" alt="avist website icon" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
