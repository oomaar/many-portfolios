import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    TestimonialContainer,
    TestimonialContent,
    TestimonialImage,
    TestimonialName,
    TestimonialClient,
    TestimonialDescription,
} from "./styledTestimonial";

SwiperCore.use([Pagination]);

export const Testimonial = ({ data }) => {
    const testimonialData = data.map(client => (
        <SwiperSlide key={client.id}>
            <TestimonialContent>
                <TestimonialImage src={client.img} />
                <TestimonialName>{client.name}</TestimonialName>
                <TestimonialClient>Client</TestimonialClient>
                <TestimonialDescription>{client.description}</TestimonialDescription>
            </TestimonialContent>
        </SwiperSlide>
    ));

    return (
        <Section>
            <Container>
                <SectionSubtitle>My client saying</SectionSubtitle>
                <SectionTitle>Testimonial</SectionTitle>

                <TestimonialContainer>
                    <Swiper
                        loop='true'
                        pagination={{ clickable: true }}
                    >
                        {testimonialData}
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </TestimonialContainer>
            </Container>
        </Section>
    );
};
