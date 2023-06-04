import { useCollection } from "../hooks/useCollection";

// styles
import "./Service.css";

export default function Service() {
  const { documents: services, isLoading, error } = useCollection("services");

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <section className="service">
      <div className="container">
        <h2>What I do</h2>
        <p>
          I create functional high-performing, content-driven, optimized
          websites and web applications!
        </p>

        <div className="service-list">
          <ul className="service-list__content">
            {services &&
              services.map((service) => (
                <li key={service.id}>
                  <img
                    className="service-image"
                    src={service.photoURL}
                    alt={service.title}
                  />
                  <div className="content">
                    <h3>{service.title}</h3>
                    {service.description &&
                      service.description.map((description, i) => (
                        <p key={i} className="description">
                          {description}
                        </p>
                      ))}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
