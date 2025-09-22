import React, { useState } from "react";
import styled from "styled-components";
import { Container, Section, SectionTitle, Button } from "../common";
import emailjs from "@emailjs/browser";

// ---- Styled Components ----
const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

const ContactInfo = styled.div`
    display: grid;
    gap: 1.5rem;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
`;

const ContactIcon = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgba(0, 120, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    color: ${({ theme }) => theme.colors.primaryAccent};
`;

const ContactText = styled.div``;

const ContactHeading = styled.h4`
    margin-bottom: 0.25rem;
    font-size: 1.1rem;
`;

const ContactValue = styled.p`
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

const ContactForm = styled.form`
    background-color: ${({ theme }) => theme.colors.cardBackground};
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.boxShadow};
`;

const InputGroup = styled.div`
    margin-bottom: 1.5rem;
`;

const InputLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid ${({ theme }) => theme.colors.lineColor};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: border-color ${({ theme }) => theme.transitions.default},
        box-shadow ${({ theme }) => theme.transitions.default};
    font-family: inherit;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primaryAccent};
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
    }
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid ${({ theme }) => theme.colors.lineColor};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: border-color ${({ theme }) => theme.transitions.default},
        box-shadow ${({ theme }) => theme.transitions.default};
    font-family: inherit;
    resize: vertical;
    min-height: 120px;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primaryAccent};
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
    }
`;

const SubmitButton = styled(Button)`
    width: 100%;
`;

const TextCenter = styled.div`
    text-align: center;
`;

// ---- Contact Component ----
const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            console.log("Sending to EmailJS:", formData);

            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                {
                    name: formData.name,
                    email: formData.email, // ensures the sender email is in your template
                    subject: formData.subject,
                    message: formData.message,
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
            );

            setLoading(false);
            setSuccess(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error(err);
            setLoading(false);
            setError("Failed to send message. Please try again later.");
        }
    };

    return (
        <Section id="contact">
            <Container>
                <SectionTitle>Get In Touch</SectionTitle>
                <ContactContainer>
                    <ContactInfo>
                        <ContactItem>
                            <ContactIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        width="20"
                                        height="16"
                                        x="2"
                                        y="4"
                                        rx="2"
                                    ></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </ContactIcon>
                            <ContactText>
                                <ContactHeading>Email</ContactHeading>
                                <ContactValue>saulco.av@gmail.com</ContactValue>
                            </ContactText>
                        </ContactItem>

                        <ContactItem>
                            <ContactIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </ContactIcon>
                            <ContactText>
                                <ContactHeading>Location</ContactHeading>
                                <ContactValue>
                                    San Diego, California
                                </ContactValue>
                            </ContactText>
                        </ContactItem>

                        <ContactItem>
                            <ContactIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        width="18"
                                        height="18"
                                        x="3"
                                        y="4"
                                        rx="2"
                                        ry="2"
                                    ></rect>
                                    <line x1="16" x2="16" y1="2" y2="6"></line>
                                    <line x1="8" x2="8" y1="2" y2="6"></line>
                                    <line x1="3" x2="21" y1="10" y2="10"></line>
                                    <path d="M8 14h.01"></path>
                                    <path d="M12 14h.01"></path>
                                    <path d="M16 14h.01"></path>
                                    <path d="M8 18h.01"></path>
                                    <path d="M12 18h.01"></path>
                                    <path d="M16 18h.01"></path>
                                </svg>
                            </ContactIcon>
                            <ContactText>
                                <ContactHeading>Availability</ContactHeading>
                                <ContactValue>
                                    Monday - Friday, 9am - 5pm
                                </ContactValue>
                            </ContactText>
                        </ContactItem>
                    </ContactInfo>

                    <ContactForm onSubmit={handleSubmit}>
                        <InputGroup>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel htmlFor="subject">Subject</InputLabel>
                            <Input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel htmlFor="message">Message</InputLabel>
                            <Textarea
                                id="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>

                        <SubmitButton type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </SubmitButton>

                        {success && (
                            <TextCenter>
                                ✅ Message sent successfully!
                            </TextCenter>
                        )}
                        {error && (
                            <TextCenter style={{ color: "red" }}>
                                {error}
                            </TextCenter>
                        )}
                    </ContactForm>
                </ContactContainer>
            </Container>
        </Section>
    );
};

export default Contact;
