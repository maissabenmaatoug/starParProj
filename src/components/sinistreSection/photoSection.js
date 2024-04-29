import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import {Grid, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
// import { useSelector, useDispatch } from "react-redux";
// import * as Actions from "../store/actions";
//  import ImageZoomDialog from "../imageUpload/imageZoomDialog";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { FaRegTrashAlt } from "react-icons/fa";
import Stack from '@mui/material/Stack';
// import TabButton from "./Components/TabsButton/TabButton";

const useStyles = makeStyles((theme) => ({
  title:{
    marginLeft: 30,
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0,
    textAlign: "left",
    color: "#30385A"
},
  subTitle:{
    marginLeft: 30,
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0,
    textAlign: "left",
    color: "#002226B2"
  },
  ImageDeleteIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    color: red[500],
    //opacity: 1,
  },
  justifyWithPadding: {
    padding: "10px",
  },
  productImageUpload: {
    borderRadius: "7px 7px 7px 7px",
    border: "1px solid #3C6556",
    borderColor: "#4969B4",
    //opacity: 0,
    width: "133px",
    height: "141px",
    padding: "0px",
    margin: "0px",
    background: "#F9F9F9",
    //float: "right",
    // transitionProperty: "box-shadow",
    // transitionDuration: theme.transitions.duration.short,
    // transitionTimingFunction: theme.transitions.easing.easeInOut,
  },
  productImageItem: {
    // transitionProperty: "box-shadow",
    // transitionDuration: theme.transitions.duration.short,
    // transitionTimingFunction: theme.transitions.easing.easeInOut,
    // "&:hover": {
    //   "& $productImageFeaturedStar": {
    //     opacity: 0.8,
    //   },
    // },
    // "&.featured": {
    //   pointerEvents: "none",
    //   boxShadow: theme.shadows[3],
    //   "& $productImageFeaturedStar": {
    //     opacity: 1,
    //   },
    //   "&:hover $productImageFeaturedStar": {
    //     opacity: 1,
    //   },
    // },
    border: '1px solid #002226B2',
  },
  formGroup: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderRadius: 2,
    padding: "12px 12px 0 12px",
    margin: "26px 12px 6px 12px",
    //display: "inline-block"
  },
  formGroupTitle: {
    position: "absolute",
    top: -10,
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0,
    textAlign: "left",
    color: "#464E5F",
    padding: "0 4px",
  },
}));

function ImagesTab(props) {
  const classes = useStyles(props);
//   const [AICorrectionDialogOpen, setAICorrectionDialogOpen] = useState(false);
const images=[];
  return (
    <React.Fragment>
      

      <Grid container>
        <Grid item xs={12}>
          <div className={classes.formGroup}>
            <Typography className={classes.formGroupTitle}
                        variant={"titleVariant"}>
              Avant réparation
            </Typography>

            <div className={clsx(classes.justifyWithPadding, "flex justify-center sm:justify-start flex-wrap")}>
              <Stack direction={{ xs: 'row', sm: 'row' }} justifyContent="space-between" alignItems="stretch">
              <UploadButton type="Avant" id="UBAvant" />
                {images &&
                    images
                        .filter((item) => item.state === "Avant")
                        .map((media) => (
                            <div
                                className={clsx(
                                    classes.productImageItem,
                                    "flex items-center justify-center relative h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                                )}
                                key={media._id}
                                style={{
                                  width: '133px',
                                  height: '141px',
                                }}
                            >
                              <FaRegTrashAlt
                                  className={classes.ImageDeleteIcon}
                                //   onClick={() => dispatch(Actions.deleteImage(media))}
                              />
                              <div
                                  style={{
                                    width: '134px',
                                    height: '141px',
                                    display: "inline-block",

                                  }}
                                //   onClick={() => {
                                //     imageZoom.setForm({
                                //       open: true,
                                //       mainImage: media,
                                //       listImages: images.filter((item) => item.state === "Avant"),
                                //     });
                                //   }}
                              >
                                <img
                                    className="max-w-none w-auto h-full"
                                    // src={media.url}
                                    alt="product"
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                    }}
                                />
                              </div>
                            </div>
                        ))}
                      {[...Array(8 - images.filter((item) => item.state === "Avant").length)].map((_, index) => (
                          <div
                              key={index}
                              style={{
                                width: "133px",
                                height: "141px",
                                backgroundColor: "#F9F9F9",
                                borderRadius: "7px",
                                marginLeft: "1%",
                                marginRight: index < 7 ? "5px" : 0,
                                marginBottom: "16px",
                              }}
                          ></div>
                      ))}
              </Stack>
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.formGroup}>
            <Typography className={classes.formGroupTitle} variant={"titleVariant"}>
              Après réparation
            </Typography>

            <div className={clsx(classes.justifyWithPadding, "flex justify-center sm:justify-start flex-wrap")}>
              <Stack direction={{ xs: 'row', sm: 'row' }} justifyContent="space-between" alignItems="stretch">
                <UploadButton type={"Apres"} id="UBApres"/>

                {images &&
                    images
                        .filter((item) => item.state === "Apres")
                        .map((media) => (
                            <div
                                className={clsx(
                                    classes.productImageItem,
                                    "flex items-center justify-center relative h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                                )}
                                key={media._id}
                                style={{
                                  width: '133px',
                                  height: '141px',
                                }}
                            >
                              <FaRegTrashAlt
                                  className={classes.ImageDeleteIcon}
                                //   onClick={() => dispatch(Actions.deleteImage(media))}
                              />
                              <div
                                  style={{
                                    width: '134px',
                                    height: '141px',
                                  }}
                                //   onClick={() => {
                                //     imageZoom.setForm({
                                //       open: true,
                                //       mainImage: media,
                                //       listImages: images.filter((item) => item.state === "Avant"),
                                //     });
                                //   }}
                              >
                                <img
                                    className="max-w-none w-auto h-full"
                                    src={media.url}
                                    alt="product"
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                    }}
                                />
                              </div>
                            </div>
                        ))}
                {[...Array(8 - images.filter((item) => item.state === "Apres").length)].map((_, index) => (
                    <div
                        key={index}
                        style={{
                          width: "133px",
                          height: "141px",
                          backgroundColor: "#F9F9F9",
                          borderRadius: "7px",
                          marginLeft: "1%",
                          marginRight: index < 7 ? "5px" : 0,
                          marginBottom: "16px",
                        }}
                    ></div>
                ))}
              </Stack>
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.formGroup}>
            <Typography className={classes.formGroupTitle} variant={"titleVariant"}>
              Autres
            </Typography>
            <div className={clsx(classes.justifyWithPadding, "flex justify-center sm:justify-start flex-wrap")}>
              <Stack direction={{ xs: 'row', sm: 'row' }} justifyContent="space-between" alignItems="stretch" >
                <UploadButton type={"Pendant"} id="UBPendant" />
                {images &&
                    images
                        .filter((item) => item.state === "Pendant")
                        .map((media) => (
                            <div
                                className={clsx(
                                    classes.productImageItem,
                                    "flex items-center justify-center relative h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                                )}
                                key={media._id}
                                style={{
                                  width: '133px',
                                  height: '141px',
                                }}
                            >
                              <FaRegTrashAlt
                                  className={classes.ImageDeleteIcon}
                                //   onClick={() => dispatch(Actions.deleteImage(media))}
                              />
                              <div
                                  style={{
                                    width: '134px',
                                    height: '141px',
                                  }}
                                //   onClick={() => {
                                //     imageZoom.setForm({
                                //       open: true,
                                //       mainImage: media,
                                //       listImages: images.filter((item) => item.state === "Avant"),
                                //     });
                                //   }}
                              >
                                <img
                                    className="max-w-none w-auto h-full"
                                    src={media.url}
                                    alt="product"
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                    }}
                                />
                              </div>
                            </div>
                        ))}
                {[...Array(8 - images.filter((item) => item.state === "Pendant").length)].map((_, index) => (
                    <div
                        key={index}
                        style={{
                          width: "133px",
                          height: "141px",
                          backgroundColor: "#F9F9F9",
                          borderRadius: "7px",
                          marginRight: index < 7 ? "5px" : 0,
                          marginBottom: "16px",
                          marginLeft: "1%",
                        }}
                    ></div>
                ))}
              </Stack>
            </div>
          </div>
        </Grid>

      </Grid>
     

      {/* {imageZoom.form.open && (
        <ImageZoomDialog
          open={imageZoom.form.open}
          mainImage={imageZoom.form.mainImage}
          listImages={imageZoom.form.listImages}
          close={() => imageZoom.setInForm("open", false)}
        />
      )} */}

      {/* {step3.model === "" ? (
        <div>
          <Typography style={{ color: "red" }}>
            vous devez selectionner le modele de la voiture dans l'etape 4
          </Typography>
        </div>
      ) : (
        <div></div>
      )} */}
      <Grid >
        {/* <TabButton/> */}
      </Grid>
    </React.Fragment>
  );
}

function UploadButton(props) {
  const classes = useStyles(props);
//   const dispatch = useDispatch();

  function handleUpload(e) {
    if (e.target.files.length === 0) {
      return;
    }
    // dispatch(Actions.postImages(e.target.files, props.type));
  }

  return (
      <div className="mr-16 mb-16 mt-0" >
        {/* <input
            accept="image/*"
            className="hidden"
            id={props.id}
            type="file"
             onChange={(event) => handleUpload(event)}
            multiple
        /> */}
        <label
            htmlFor={props.id}
            className={clsx(
                classes.productImageUpload,
                "flex rounded-4 cursor-pointer shadow-1 hover:shadow-5",
                "text-center"
            )}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
        >
          <PhotoCameraIcon
              fontSize="large"
              style={{
                width: '35px',
                height: '28.44px',
                color: '#4969B4',
              }}
          />
          <span
              style={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '18.83px',
                color: '#002226',
                marginTop: '8px',
              }}
          >

          Ajouter photo
        </span>
        
        </label>
      </div>

  );
}

export default ImagesTab;
