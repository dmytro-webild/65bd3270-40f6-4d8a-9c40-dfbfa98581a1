"use client";

import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Star, Zap, FlaskConical, ShieldCheck, Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLarge"
      background="noiseDiagonalGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Dr Akshay's Aesthetic Clinic"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lsi486"
          logoAlt="luxury aesthetic clinic logo gold"
          navItems={[
            { name: "Home", id: "#hero" },
            { name: "About", id: "#about" },
            { name: "Services", id: "#services" },
            { name: "Gallery", id: "#gallery-before-after" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "FAQ", id: "#faq" },
            { name: "Contact", id: "#contact" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Reveal Your Best Skin & Hair"
          description="Advanced Skin, Hair & Aesthetic Treatments Designed To Help You Look And Feel Your Best."
          tag="Udaipur's Premier Aesthetic Clinic"
          tagIcon="Star"
          buttons={[
            { text: "Book Appointment", href: "#contact" },
            { text: "WhatsApp Now", href: "https://wa.me/919571920736" },
            { text: "Call Now", href: "tel:+919571920736" }
          ]}
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/portrait-beautiful-afro-american-woman_23-2148332136.jpg", alt: "smiling woman patient avatar" },
            { src: "http://img.b2bpic.net/free-photo/blond-man-surprised_1194-2853.jpg", alt: "confident man patient avatar" },
            { src: "http://img.b2bpic.net/free-photo/young-beautiful-woman-looking-trendy-girl-casual-summer-clothes-funny-positive-female-posing-near-blue-wall_158538-6577.jpg", alt: "young woman patient avatar" },
            { src: "http://img.b2bpic.net/free-photo/senior-man-looking-elegant-posing-suit_23-2149488020.jpg", alt: "senior woman patient avatar" },
            { src: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg", alt: "professional man patient avatar" }
          ]}
          avatarText="4.7★ Rated Clinic"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EZE8YhzCslgXuPhXlrOzfFnQFi/uploaded-1780999305104-kfjr9ojs.png"
          imageAlt="Dermatologist consultation in luxury aesthetic clinic"
          showBlur={true}
          useInvertedBackground={false}
          textPosition="bottom"
        />
      </div>
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Thousands, Rated Excellent"
          names={[
            "4.7★ Patient Rating",            "Advanced Technology",            "Personalized Care",            "Safe Procedures",            "Experienced Specialist",            "World-Class Treatments",            "Modern Clinic"
          ]}
          useInvertedBackground={false}
          textboxLayout="default"
          animationType="none"
          showCard={false}
        />
      </div>
      <div id="about" data-section="about">
        <TextAbout
          title="Your Journey to Radiant Skin and Hair Begins Here"
          description="Dr Akshay's Aesthetic Clinic is dedicated to providing advanced skin and hair treatments using modern techniques, personalized care, and world-class technology. We believe in transforming confidence by delivering exceptional results with a patient-centered approach."
          tag="About Our Clinic"
          useInvertedBackground={false}
        />
      </div>
      <div id="services" data-section="services">
        <FeatureCardThree
          title="Our Signature Skin & Hair Treatments"
          description="Discover a comprehensive range of advanced aesthetic procedures tailored to your unique needs, ensuring optimal results and lasting confidence."
          features={[
            { title: "Hair Transplant", description: "Restore your natural hairline with advanced and effective hair transplant techniques, delivering lasting results.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kf6ugq", imageAlt: "hair transplant procedure illustration" },
            { title: "PRP Hair Therapy", description: "Stimulate natural hair growth and strengthen follicles with our advanced Platelet-Rich Plasma therapy.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-doctor-applying-treatment_23-2149311382.jpg", imageAlt: "prp therapy blood tubes medical" },
            { title: "Hair Loss Treatment", description: "Comprehensive solutions for various types of hair loss, personalized to your specific condition and needs.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-using-syringe_23-2149311377.jpg", imageAlt: "hair loss treatment graphic diagram" },
            { title: "Skin Rejuvenation", description: "Revitalize your skin with treatments designed to improve texture, tone, and overall radiance.", imageSrc: "http://img.b2bpic.net/free-photo/woman-before-after-eyelashes-extensions_23-2150039812.jpg", imageAlt: "skin rejuvenation glowing face" },
            { title: "Acne Treatment", description: "Effective solutions to combat acne and prevent future breakouts, leading to clear and healthy skin.", imageSrc: "http://img.b2bpic.net/free-photo/combination-facial-features-concept_23-2150087699.jpg", imageAlt: "acne treatment before after clear skin" },
            { title: "Pigmentation Treatment", description: "Reduce dark spots and achieve an even skin tone with our advanced pigmentation removal therapies.", imageSrc: "http://img.b2bpic.net/free-photo/woman-cosmetology-studio-procedures_1157-34916.jpg", imageAlt: "skin pigmentation treatment before after" },
            { title: "Laser Skin Treatment", description: "Harness the power of laser technology for various skin concerns, from hair removal to scar revision.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-woman-with-prosthetis_23-2150589278.jpg", imageAlt: "laser skin treatment machine light" },
            { title: "Anti-Aging Treatments", description: "Combat signs of aging with a range of treatments that restore youthful vitality and firmness to your skin.", imageSrc: "http://img.b2bpic.net/free-photo/sensual-glamour-beautiful-woman-model-with-fresh-daily-makeup-with-nude-lips-color-clean-healthy-skin-face_158538-14012.jpg", imageAlt: "anti-aging skin care woman face" },
            { title: "Botox & Fillers", description: "Subtly enhance your features and reduce wrinkles with expertly administered Botox and dermal fillers.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EZE8YhzCslgXuPhXlrOzfFnQFi/uploaded-1780999305104-0za87l8k.png", imageAlt: "User provided image" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="why-choose-us" data-section="why-choose-us">
        <MetricCardThree
          title="Why Choose Dr Akshay's Aesthetic Clinic?"
          description="Experience the difference with a clinic committed to excellence, innovation, and unparalleled patient care. Your transformation is our priority."
          metrics={[
            { id: "m1", icon: Star, title: "Patient Satisfaction", value: "4.7★ Rated" },
            { id: "m2", icon: Zap, title: "Modern Technology", value: "Advanced Equipment" },
            { id: "m3", icon: FlaskConical, title: "Personalized Plans", value: "Customized Care" },
            { id: "m4", icon: ShieldCheck, title: "Safe Environment", value: "Hygienic Procedures" },
            { id: "m5", icon: Award, title: "Experienced Specialists", value: "Board-Certified" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="gallery-before-after" data-section="gallery-before-after">
        <ProductCardThree
          title="Real Transformations: Before & After"
          description="Witness the remarkable results achieved at our clinic through advanced aesthetic and hair restoration treatments. Your journey to confidence starts here."
          products={[
            { id: "ba1", name: "Hair Restoration", price: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EZE8YhzCslgXuPhXlrOzfFnQFi/uploaded-1780999305104-pmkiz1cu.png", imageAlt: "User provided image", onProductClick: () => {}, onFavorite: () => {} },
            { id: "ba2", name: "Skin Clarity Treatment", price: "", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-holding-paintbrushes-her-head-high-quality-illustration_114579-47155.jpg", imageAlt: "hair transplant before after male", onProductClick: () => {}, onFavorite: () => {} },
            { id: "ba3", name: "Anti-Aging Effect", price: "", imageSrc: "http://img.b2bpic.net/free-photo/antiaging-beauty-treatment_23-2149123614.jpg", imageAlt: "laser skin resurfacing before after", onProductClick: () => {}, onFavorite: () => {} },
            { id: "ba4", name: "Hair Thickening", price: "", imageSrc: "http://img.b2bpic.net/free-photo/adult-taking-care-their-hair_23-2149345768.jpg", imageAlt: "hair loss treatment results female", onProductClick: () => {}, onFavorite: () => {} },
            { id: "ba5", name: "Skin Firming", price: "", imageSrc: "http://img.b2bpic.net/free-photo/side-view-hands-drawing-woman-s-face_23-2149350084.jpg", imageAlt: "skin tightening before after face", onProductClick: () => {}, onFavorite: () => {} },
            { id: "ba6", name: "Acne Solution", price: "", imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-with-acne-issues_23-2149947583.jpg", imageAlt: "acne treatment results clear skin", onProductClick: () => {}, onFavorite: () => {} }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Patients Say"
          description="Hear directly from our satisfied clients about their transformative experiences and the exceptional care they received at Dr Akshay's Aesthetic Clinic."
          testimonials={[
            { id: "t1", name: "Priya Sharma", role: "Satisfied Client", testimonial: "Dr Akshay's clinic gave me back my confidence! The skin rejuvenation treatment was amazing, and the results are truly remarkable. Highly recommend!", imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-after-lip-filler_23-2149313545.jpg", imageAlt: "happy patient smiling portrait" },
            { id: "t2", name: "Rahul Verma", role: "Hair Transplant Patient", testimonial: "The hair transplant procedure was seamless. Dr Akshay and his team are incredibly professional and the results have exceeded my expectations.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-poses-background-white-studio-holding-advertising-banner_114579-92507.jpg", imageAlt: "male client smiling professional" },
            { id: "t3", name: "Anjali Singh", role: "Acne Treatment Patient", testimonial: "Finally found a solution for my stubborn acne. Dr Akshay's personalized approach made all the difference. My skin has never looked better!", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-holding-mirror_23-2149313549.jpg", imageAlt: "young woman smiling radiant" },
            { id: "t4", name: "Suresh Kumar", role: "Laser Treatment Client", testimonial: "Experienced a fantastic laser treatment. The clinic is state-of-the-art and the staff is very caring. A truly premium experience.", imageSrc: "http://img.b2bpic.net/free-photo/colleagues-working-together-while-sitting-cafe_273609-13276.jpg", imageAlt: "middle-aged woman happy portrait" },
            { id: "t5", name: "Deepika Gupta", role: "Anti-Aging Client", testimonial: "My anti-aging treatment was subtle yet incredibly effective. I feel refreshed and look years younger. Thank you, Dr Akshay!", imageSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-man-with-beard-looking-thoughtful-upper-left-corner-imaging-smiling-white_1258-111163.jpg", imageAlt: "man professional happy face" }
          ]}
          carouselMode="auto"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="clinic-gallery" data-section="clinic-gallery">
        <ProductCardThree
          title="Explore Our World-Class Clinic"
          description="Step into our modern and luxurious clinic environment designed for your comfort and equipped with the latest aesthetic technology."
          products={[
            { id: "cg1", name: "Luxurious Reception", price: "", imageSrc: "http://img.b2bpic.net/free-photo/room-with-massage-tables-wall-with-lights-it_188544-36461.jpg", imageAlt: "luxury clinic reception area modern", onProductClick: () => {}, onFavorite: () => {} },
            { id: "cg2", name: "Private Consultation", price: "", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-theraphy-salon_23-2148824083.jpg", imageAlt: "dermatologist consultation room professional", onProductClick: () => {}, onFavorite: () => {} },
            { id: "cg3", name: "Advanced Treatment Room", price: "", imageSrc: "http://img.b2bpic.net/free-photo/side-view-doctor-putting-medical-gown_23-2149601738.jpg", imageAlt: "advanced laser treatment room equipment", onProductClick: () => {}, onFavorite: () => {} },
            { id: "cg4", name: "Cutting-Edge Equipment", price: "", imageSrc: "http://img.b2bpic.net/free-photo/female-patient-lying-looking-doctor_107420-74016.jpg", imageAlt: "new aesthetic medical equipment high-tech", onProductClick: () => {}, onFavorite: () => {} },
            { id: "cg5", name: "Elegant Interiors", price: "", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-hotel-insights-details_23-2149160767.jpg", imageAlt: "clinic interior design elegant hallway", onProductClick: () => {}, onFavorite: () => {} },
            { id: "cg6", name: "Modern Exterior", price: "", imageSrc: "http://img.b2bpic.net/free-photo/hallway-building_23-2149397562.jpg", imageAlt: "dermatology clinic exterior modern building", onProductClick: () => {}, onFavorite: () => {} }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our treatments, procedures, and what to expect during your visit to Dr Akshay's Aesthetic Clinic."
          faqs={[
            { id: "faq1", title: "What is the recovery time for Hair Transplant?", content: "Recovery time for a hair transplant typically involves a few days of mild discomfort and swelling, with visible healing within 1-2 weeks. Full results appear over several months." },
            { id: "faq2", title: "How many PRP Hair Therapy sessions are needed?", content: "Typically, 3-4 PRP sessions are recommended, spaced 4-6 weeks apart, followed by maintenance sessions as advised by your dermatologist." },
            { id: "faq3", title: "Is Acne Treatment painful?", content: "Most acne treatments are not painful, though some procedures like extractions or certain laser treatments may cause mild discomfort, which is well-managed with topical anesthetics." },
            { id: "faq4", title: "What are Laser Procedures used for?", content: "Laser procedures are versatile, used for hair removal, skin resurfacing, pigmentation removal, scar reduction, and treating vascular lesions, among others." },
            { id: "faq5", title: "How do I book an appointment?", content: "You can book an appointment directly through our website's booking form, via WhatsApp, or by calling our clinic during working hours. Instant confirmation will be provided." },
            { id: "faq6", title: "What should I expect during my first consultation?", content: "Your first consultation includes a detailed skin and hair analysis, discussion of your concerns, personalized treatment recommendations, and an opportunity to ask any questions you may have." }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactText
          title="Book Your Consultation Today"
          text="Take the first step toward healthier skin and more confident hair. Fill out the form below or contact us directly to schedule your personalized consultation. Our team is ready to assist you on your aesthetic journey.\n\n**Address:** Kumkum Apartment, B-803, Mahaveer Colony Park, Udaipur, Rajasthan 313001\n\n**Phone:** 095719 20736\n\n**Working Hours:** Mon-Sat: 10 AM - 7 PM, Sun: Closed\n\nWe offer instant booking, WhatsApp & email confirmations, and a seamless booking experience."
          buttons={[
            { text: "Book Appointment", href: "#" },
            { text: "WhatsApp Now", href: "https://wa.me/919571920736" },
            { text: "Call Now", href: "tel:+919571920736" }
          ]}
          background={{ variant: "radial-gradient" }}
          animationType="entrance-slide"
          useInvertedBackground={false}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Dr Akshay's Aesthetic Clinic"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lsi486"
          logoAlt="luxury aesthetic clinic logo gold"
          columns={[
            { items: [{ label: "Home", href: "#hero" }, { label: "About Us", href: "#about" }, { label: "Services", href: "#services" }, { label: "Gallery", href: "#gallery-before-after" }, { label: "FAQ", href: "#faq" }] },
            { items: [{ label: "Hair Transplant", href: "#services" }, { label: "PRP Hair Therapy", href: "#services" }, { label: "Skin Rejuvenation", href: "#services" }, { label: "Acne Treatment", href: "#services" }, { label: "Laser Skin Treatment", href: "#services" }, { label: "Anti-Aging", href: "#services" }] },
            { items: [{ label: "Address: Kumkum Apartment, B-803, Mahaveer Colony Park, Udaipur, Rajasthan 313001", href: "https://maps.app.goo.gl/YOUR_GOOGLE_MAPS_LINK" }, { label: "Phone: 095719 20736", href: "tel:+919571920736" }, { label: "WhatsApp Consultation", href: "https://wa.me/919571920736" }] },
            { items: [{ label: "Facebook", href: "#" }, { label: "Instagram", href: "#" }, { label: "Twitter", href: "#" }, { label: "LinkedIn", href: "#" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
