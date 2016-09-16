--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: bike; Type: TABLE; Schema: public; Owner: ann
--

CREATE TABLE bike (
    id integer NOT NULL,
    style text,
    brand text,
    model text,
    color text,
    brakes text,
    gears text,
    handlebars text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE bike OWNER TO ann;

--
-- Name: bike_id_seq; Type: SEQUENCE; Schema: public; Owner: ann
--

CREATE SEQUENCE bike_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE bike_id_seq OWNER TO ann;

--
-- Name: bike_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ann
--

ALTER SEQUENCE bike_id_seq OWNED BY bike.id;


--
-- Name: city; Type: TABLE; Schema: public; Owner: ann
--

CREATE TABLE city (
    id integer NOT NULL,
    name text,
    state text,
    country text
);


ALTER TABLE city OWNER TO ann;

--
-- Name: city_id_seq; Type: SEQUENCE; Schema: public; Owner: ann
--

CREATE SEQUENCE city_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE city_id_seq OWNER TO ann;

--
-- Name: city_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ann
--

ALTER SEQUENCE city_id_seq OWNED BY city.id;


--
-- Name: photo; Type: TABLE; Schema: public; Owner: ann
--

CREATE TABLE photo (
    id integer NOT NULL,
    original_filename text,
    url_key text,
    bike_id integer,
    user_id integer
);


ALTER TABLE photo OWNER TO ann;

--
-- Name: photo_id_seq; Type: SEQUENCE; Schema: public; Owner: ann
--

CREATE SEQUENCE photo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE photo_id_seq OWNER TO ann;

--
-- Name: photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ann
--

ALTER SEQUENCE photo_id_seq OWNED BY photo.id;


--
-- Name: story; Type: TABLE; Schema: public; Owner: ann
--

CREATE TABLE story (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    text text,
    user_id integer
);


ALTER TABLE story OWNER TO ann;

--
-- Name: story_id_seq; Type: SEQUENCE; Schema: public; Owner: ann
--

CREATE SEQUENCE story_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE story_id_seq OWNER TO ann;

--
-- Name: story_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ann
--

ALTER SEQUENCE story_id_seq OWNED BY story.id;


--
-- Name: theft; Type: TABLE; Schema: public; Owner: ann
--

CREATE TABLE theft (
    id integer NOT NULL,
    reported_at timestamp with time zone,
    description text,
    bike_id integer,
    owner_id integer,
    recovered_at timestamp with time zone
);


ALTER TABLE theft OWNER TO ann;

--
-- Name: theft_id_seq; Type: SEQUENCE; Schema: public; Owner: ann
--

CREATE SEQUENCE theft_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE theft_id_seq OWNER TO ann;

--
-- Name: theft_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ann
--

ALTER SEQUENCE theft_id_seq OWNED BY theft.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: ann
--

CREATE TABLE "user" (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    last_login timestamp with time zone,
    username text,
    facebook_id integer,
    name text,
    first_name text,
    last_name text,
    facebook_link text,
    gender text,
    locale text
);


ALTER TABLE "user" OWNER TO ann;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: ann
--

CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_id_seq OWNER TO ann;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ann
--

ALTER SEQUENCE user_id_seq OWNED BY "user".id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ann
--

ALTER TABLE ONLY bike ALTER COLUMN id SET DEFAULT nextval('bike_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ann
--

ALTER TABLE ONLY city ALTER COLUMN id SET DEFAULT nextval('city_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ann
--

ALTER TABLE ONLY photo ALTER COLUMN id SET DEFAULT nextval('photo_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ann
--

ALTER TABLE ONLY story ALTER COLUMN id SET DEFAULT nextval('story_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ann
--

ALTER TABLE ONLY theft ALTER COLUMN id SET DEFAULT nextval('theft_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: ann
--

ALTER TABLE ONLY "user" ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);


--
-- Data for Name: bike; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY bike (id, style, brand, model, color, brakes, gears, handlebars, created_at, updated_at) FROM stdin;
\.


--
-- Name: bike_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('bike_id_seq', 1, false);


--
-- Data for Name: city; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY city (id, name, state, country) FROM stdin;
\.


--
-- Name: city_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('city_id_seq', 1, false);


--
-- Data for Name: photo; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY photo (id, original_filename, url_key, bike_id, user_id) FROM stdin;
\.


--
-- Name: photo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('photo_id_seq', 1, false);


--
-- Data for Name: story; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY story (id, created_at, text, user_id) FROM stdin;
\.


--
-- Name: story_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('story_id_seq', 1, false);


--
-- Data for Name: theft; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY theft (id, reported_at, description, bike_id, owner_id, recovered_at) FROM stdin;
\.


--
-- Name: theft_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('theft_id_seq', 1, false);


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY "user" (id, created_at, last_login, username, facebook_id, name, first_name, last_name, facebook_link, gender, locale) FROM stdin;
\.


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('user_id_seq', 1, false);


--
-- Name: bike_pkey; Type: CONSTRAINT; Schema: public; Owner: ann
--

ALTER TABLE ONLY bike
    ADD CONSTRAINT bike_pkey PRIMARY KEY (id);


--
-- Name: city_pkey; Type: CONSTRAINT; Schema: public; Owner: ann
--

ALTER TABLE ONLY city
    ADD CONSTRAINT city_pkey PRIMARY KEY (id);


--
-- Name: photo_pkey; Type: CONSTRAINT; Schema: public; Owner: ann
--

ALTER TABLE ONLY photo
    ADD CONSTRAINT photo_pkey PRIMARY KEY (id);


--
-- Name: story_pkey; Type: CONSTRAINT; Schema: public; Owner: ann
--

ALTER TABLE ONLY story
    ADD CONSTRAINT story_pkey PRIMARY KEY (id);


--
-- Name: theft_pkey; Type: CONSTRAINT; Schema: public; Owner: ann
--

ALTER TABLE ONLY theft
    ADD CONSTRAINT theft_pkey PRIMARY KEY (id);


--
-- Name: user_pkey; Type: CONSTRAINT; Schema: public; Owner: ann
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: photo_bike_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ann
--

ALTER TABLE ONLY photo
    ADD CONSTRAINT photo_bike_id_fkey FOREIGN KEY (bike_id) REFERENCES bike(id) ON DELETE CASCADE;


--
-- Name: photo_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ann
--

ALTER TABLE ONLY photo
    ADD CONSTRAINT photo_user_id_fkey FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE;


--
-- Name: story_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ann
--

ALTER TABLE ONLY story
    ADD CONSTRAINT story_user_id_fkey FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE;


--
-- Name: theft_bike_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ann
--

ALTER TABLE ONLY theft
    ADD CONSTRAINT theft_bike_id_fkey FOREIGN KEY (bike_id) REFERENCES bike(id) ON DELETE CASCADE;


--
-- Name: theft_owner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ann
--

ALTER TABLE ONLY theft
    ADD CONSTRAINT theft_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES "user"(id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

