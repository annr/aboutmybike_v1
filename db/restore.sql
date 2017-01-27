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
-- Name: bike; Type: TABLE; Schema: public; Owner: arobson
--

CREATE TABLE bike (
    id integer NOT NULL,
    style text,
    brand text,
    model text,
    color text,
    brakes text,
    speeds smallint,
    handlebars text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE bike OWNER TO arobson;

--
-- Name: bike_id_seq; Type: SEQUENCE; Schema: public; Owner: arobson
--

CREATE SEQUENCE bike_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE bike_id_seq OWNER TO arobson;

--
-- Name: bike_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arobson
--

ALTER SEQUENCE bike_id_seq OWNED BY bike.id;


--
-- Name: city; Type: TABLE; Schema: public; Owner: arobson
--

CREATE TABLE city (
    id integer NOT NULL,
    name text,
    state text,
    country text
);


ALTER TABLE city OWNER TO arobson;

--
-- Name: city_id_seq; Type: SEQUENCE; Schema: public; Owner: arobson
--

CREATE SEQUENCE city_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE city_id_seq OWNER TO arobson;

--
-- Name: city_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arobson
--

ALTER SEQUENCE city_id_seq OWNED BY city.id;


--
-- Name: photo; Type: TABLE; Schema: public; Owner: arobson
--

CREATE TABLE photo (
    id integer NOT NULL,
    original_filename text,
    url_key text,
    bike_id integer,
    user_id integer
);


ALTER TABLE photo OWNER TO arobson;

--
-- Name: photo_id_seq; Type: SEQUENCE; Schema: public; Owner: arobson
--

CREATE SEQUENCE photo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE photo_id_seq OWNER TO arobson;

--
-- Name: photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arobson
--

ALTER SEQUENCE photo_id_seq OWNED BY photo.id;


--
-- Name: story; Type: TABLE; Schema: public; Owner: arobson
--

CREATE TABLE story (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    text text,
    user_id integer
);


ALTER TABLE story OWNER TO arobson;

--
-- Name: story_id_seq; Type: SEQUENCE; Schema: public; Owner: arobson
--

CREATE SEQUENCE story_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE story_id_seq OWNER TO arobson;

--
-- Name: story_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arobson
--

ALTER SEQUENCE story_id_seq OWNED BY story.id;


--
-- Name: theft; Type: TABLE; Schema: public; Owner: arobson
--

CREATE TABLE theft (
    id integer NOT NULL,
    reported_at timestamp with time zone,
    description text,
    bike_id integer,
    owner_id integer,
    recovered_at timestamp with time zone
);


ALTER TABLE theft OWNER TO arobson;

--
-- Name: theft_id_seq; Type: SEQUENCE; Schema: public; Owner: arobson
--

CREATE SEQUENCE theft_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE theft_id_seq OWNER TO arobson;

--
-- Name: theft_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arobson
--

ALTER SEQUENCE theft_id_seq OWNED BY theft.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: arobson
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


ALTER TABLE "user" OWNER TO arobson;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: arobson
--

CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_id_seq OWNER TO arobson;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arobson
--

ALTER SEQUENCE user_id_seq OWNED BY "user".id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY bike ALTER COLUMN id SET DEFAULT nextval('bike_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY city ALTER COLUMN id SET DEFAULT nextval('city_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY photo ALTER COLUMN id SET DEFAULT nextval('photo_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY story ALTER COLUMN id SET DEFAULT nextval('story_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY theft ALTER COLUMN id SET DEFAULT nextval('theft_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY "user" ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);


--
-- Data for Name: bike; Type: TABLE DATA; Schema: public; Owner: arobson
--

COPY bike (id, style, brand, model, color, brakes, speeds, handlebars, created_at, updated_at, user_id) FROM stdin;
1	cruiser	Fuji	Cambridge III	red	rim	1	mustache	2016-09-16 18:13:22.682023-07	2016-09-27 06:22:32.468796-07	1
3	road	Raleigh	Technium	yellow+gray+pink	rim	12	drop	2016-09-16 18:24:52.781274-07	2016-09-27 06:22:32.468796-07	1
4	hybrid	Surly	Straggler	purple+mint	disc	10	drop	2016-09-16 18:27:28.759123-07	2016-09-27 06:22:32.468796-07	1
2	cruiser	Laguna BMX	Super Cruiser	chrome	none	1	other	2016-09-16 18:18:21.902632-07	2016-09-27 06:22:32.468796-07	1
6	bmx	Mongoose	Custom Trials Bike	silver+gold	disc	1	riser	2016-09-16 21:33:55.323714-07	2016-09-27 06:22:32.468796-07	1
7	cruiser	\N	\N	\N	\N	\N	\N	2016-09-27 06:16:00.902921-07	2016-09-27 06:22:32.468796-07	1
8	cruiser	schwinn	beach	red	rim	7	cruiser	2016-09-27 06:29:27.816243-07	2016-09-27 06:29:27.816243-07	1
5	fat bike	State Bicycle Company	Megalith Blah Blah Blah	yellow+mint+red	disc	7	riser	2016-09-16 21:31:49.890723-07	2016-09-27 06:22:32.468796-07	1
9	cruiser	schwinn	beach	red	rim	7	cruiser	2016-10-29 09:49:58.714709-07	2016-10-29 09:49:58.714709-07	1
11	boo	boo	boo	\N	\N	\N	\N	2016-10-29 13:10:52.281261-07	2016-10-29 13:10:52.281261-07	1
12	boo	boo	boo	\N	\N	\N	\N	2016-10-29 16:51:26.029358-07	2016-10-29 16:51:26.029358-07	1
13	Fixed-gear	Trek	Gazelle	\N	\N	\N	\N	2016-10-29 16:56:49.61316-07	2016-10-29 16:56:49.61316-07	1
14	City	\N	\N	\N	\N	\N	\N	2016-10-29 16:59:33.571513-07	2016-10-29 16:59:33.571513-07	1
15	Track	\N	\N	\N	\N	\N	\N	2016-10-29 17:00:16.576475-07	2016-10-29 17:00:16.576475-07	1
16	Road	arobsonoying	3	\N	\N	\N	\N	2016-10-29 17:44:43.843901-07	2016-10-29 17:44:43.843901-07	1
17	Mountain	Surly	FattyFatty	\N	\N	\N	\N	2016-10-29 17:46:23.746642-07	2016-10-29 17:46:23.746642-07	1
18	Fixed-gear	Surly	Fatty Fatty	\N	\N	\N	\N	2016-10-29 17:46:58.777008-07	2016-10-29 17:46:58.777008-07	1
19	Hybrid	motobecane	xxl	\N	\N	\N	\N	2016-10-29 18:15:01.346977-07	2016-10-29 18:15:01.346977-07	1
20	Mountain			\N	\N	\N	\N	2016-10-30 11:37:58.773074-07	2016-10-30 11:37:58.773074-07	1
21	boo	boo	boo	\N	\N	\N	\N	2016-10-30 12:09:56.020174-07	2016-10-30 12:09:56.020174-07	1
22	boo	boo	boo	\N	\N	\N	\N	2016-10-30 12:13:02.722395-07	2016-10-30 12:13:02.722395-07	1
23	boo	boo	boo	\N	\N	\N	\N	2016-10-30 12:16:44.312318-07	2016-10-30 12:16:44.312318-07	1
24	boo	boo	boo	\N	\N	\N	\N	2016-10-30 12:17:50.605073-07	2016-10-30 12:17:50.605073-07	1
25	boo	boo	boo	\N	\N	\N	\N	2016-10-30 12:18:07.137679-07	2016-10-30 12:18:07.137679-07	1
26	boo	boo	boo	\N	\N	\N	\N	2016-10-30 12:20:36.504461-07	2016-10-30 12:20:36.504461-07	1
27	Cruiser	Schwinn		\N	\N	\N	\N	2016-10-30 12:28:52.816105-07	2016-10-30 12:28:52.816105-07	1
28	BMX			\N	\N	\N	\N	2016-10-30 12:44:50.679557-07	2016-10-30 12:44:50.679557-07	1
29	Cruiser			\N	\N	\N	\N	2016-10-30 12:45:03.055303-07	2016-10-30 12:45:03.055303-07	1
30	BMX			\N	\N	\N	\N	2016-10-30 12:49:17.129297-07	2016-10-30 12:49:17.129297-07	1
31	Folding			\N	\N	\N	\N	2016-10-30 13:03:42.645923-07	2016-10-30 13:03:42.645923-07	1
32	Track			\N	\N	\N	\N	2016-10-30 13:05:24.49138-07	2016-10-30 13:05:24.49138-07	1
33	Road	motobecane	??	\N	\N	\N	\N	2016-11-03 21:05:09.974824-07	2016-11-03 21:05:09.974824-07	1
34	Road	motobecane	??	\N	\N	\N	\N	2016-11-03 21:05:18.339264-07	2016-11-03 21:05:18.339264-07	1
35	Road	Motobecane	??	\N	\N	\N	\N	2016-11-03 21:05:29.459523-07	2016-11-03 21:05:29.459523-07	1
36	Other	Schwinn		\N	\N	\N	\N	2016-11-03 21:06:08.158754-07	2016-11-03 21:06:08.158754-07	1
37	boo	boo	boo	\N	\N	\N	\N	2016-11-13 19:38:15.033958-08	2016-11-13 19:38:15.033958-08	1
38	Cruiser	Schwinn?	uh?	\N	\N	\N	\N	2017-01-23 11:54:20.599836-08	2017-01-23 11:54:20.599836-08	1
39	Cruiser	Schwinn?	uh?	\N	\N	\N	\N	2017-01-23 11:54:25.186878-08	2017-01-23 11:54:25.186878-08	1
\.


--
-- Name: bike_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arobson
--

SELECT pg_catalog.setval('bike_id_seq', 39, true);


--
-- Data for Name: city; Type: TABLE DATA; Schema: public; Owner: arobson
--

COPY city (id, name, state, country) FROM stdin;
\.


--
-- Name: city_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arobson
--

SELECT pg_catalog.setval('city_id_seq', 1, false);


--
-- Data for Name: photo; Type: TABLE DATA; Schema: public; Owner: arobson
--

COPY photo (id, original_filename, url_key, bike_id, user_id) FROM stdin;
\.


--
-- Name: photo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arobson
--

SELECT pg_catalog.setval('photo_id_seq', 1, false);


--
-- Data for Name: story; Type: TABLE DATA; Schema: public; Owner: arobson
--

COPY story (id, created_at, text, user_id) FROM stdin;
\.


--
-- Name: story_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arobson
--

SELECT pg_catalog.setval('story_id_seq', 1, false);


--
-- Data for Name: theft; Type: TABLE DATA; Schema: public; Owner: arobson
--

COPY theft (id, reported_at, description, bike_id, owner_id, recovered_at) FROM stdin;
\.


--
-- Name: theft_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arobson
--

SELECT pg_catalog.setval('theft_id_seq', 1, false);


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: arobson
--

COPY "user" (id, created_at, last_login, username, facebook_id, name, first_name, last_name, facebook_link, gender, locale) FROM stdin;
1	2016-09-25 20:27:23.210233-07	\N	arobson	123	Ann Robson	Ann	Robson	https://www.facebook.com/aerobson	female	en-us
\.


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arobson
--

SELECT pg_catalog.setval('user_id_seq', 1, false);


--
-- Name: bike_pkey; Type: CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY bike
    ADD CONSTRAINT bike_pkey PRIMARY KEY (id);


--
-- Name: city_pkey; Type: CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY city
    ADD CONSTRAINT city_pkey PRIMARY KEY (id);


--
-- Name: photo_pkey; Type: CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY photo
    ADD CONSTRAINT photo_pkey PRIMARY KEY (id);


--
-- Name: story_pkey; Type: CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY story
    ADD CONSTRAINT story_pkey PRIMARY KEY (id);


--
-- Name: theft_pkey; Type: CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY theft
    ADD CONSTRAINT theft_pkey PRIMARY KEY (id);


--
-- Name: user_pkey; Type: CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: photo_bike_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY photo
    ADD CONSTRAINT photo_bike_id_fkey FOREIGN KEY (bike_id) REFERENCES bike(id) ON DELETE CASCADE;


--
-- Name: photo_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY photo
    ADD CONSTRAINT photo_user_id_fkey FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE;


--
-- Name: story_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY story
    ADD CONSTRAINT story_user_id_fkey FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE;


--
-- Name: theft_bike_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY theft
    ADD CONSTRAINT theft_bike_id_fkey FOREIGN KEY (bike_id) REFERENCES bike(id) ON DELETE CASCADE;


--
-- Name: theft_owner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY theft
    ADD CONSTRAINT theft_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES "user"(id);


--
-- Name: user_id; Type: FK CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY bike
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES "user"(id);


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

