# Administrator setup

## Ownership and launch order

Dongming or her practice should own the GitHub repository and Cloudflare domain. A technical administrator may manage code, deployment, and DNS; Dongming can use Pages CMS for routine edits.

1. Create an empty GitHub repository in Dongming's account and upload this folder's contents to its root.
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
3. Confirm the **Deploy website** action succeeds and test `https://projects.mindx.us/dongming-zhao/`.
4. At Pages CMS, authorize its GitHub App only for this repository. Add Dongming as an email collaborator if the selected plan supports it.
5. Test a harmless edit to the booking button text, save, verify deployment, then restore the intended wording.
6. Keep the repository variables at `SITE_URL=https://projects.mindx.us` and `BASE_PATH=/dongming-zhao` during testing.
7. When ready for the final domain, set repository variable `SITE_URL` to the final origin and `BASE_PATH` to `/`, then redeploy. No page-source changes are needed.
8. Verify the final custom domain in the correct GitHub account or organization before changing DNS. Add it in **Settings → Pages → Custom domain** only at cutover.
9. Only after the preview works, use GitHub's current custom-domain documentation to add the exact required records in Cloudflare.

## Cloudflare safeguards

Export or screenshot the existing DNS zone first. Do not delete MX, SPF, DKIM, DMARC, verification, or unrelated service records. No `CNAME` file is included during preview, so the repository does not claim a production domain. Configure the final custom domain through GitHub Pages settings at cutover, then configure root and `www` behavior intentionally and verify HTTPS and email still work.

If Cloudflare's interface or GitHub's current record values differ from the guide you are following, stop and use the current official GitHub Pages custom-domain documentation. Do not guess DNS values.

## Recovery and offboarding

GitHub retains version history. Revert a bad content commit or redeploy a known-good commit. Keep at least two repository administrators. Remove former collaborators from both GitHub and Pages CMS, rotate any affected credentials, and transfer repository/domain ownership before an administrator leaves.
