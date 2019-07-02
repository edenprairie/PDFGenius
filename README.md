# "Convert Microsoft document to PDF"

A simple web service that transforms the given document into a PDF file. 

### URL parameters:

* `input`: URL of the document to transform.

## Running the server locally

* Build with `docker build . -t pdf`
* Start with `docker run -p 8080:8080 pdf`
* Open in your browser at `http://localhost:8080/`

## Deploy to your server

The following container image always reflects the latest version of the `master` branch of this repo: `gcr.io/as-a-service-dev/pdf`

## Deploy to Microsoft Azure 

